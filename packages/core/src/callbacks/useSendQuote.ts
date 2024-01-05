import { useCallback, useMemo } from "react";

import useActiveWagmi from "../lib/hooks/useActiveWagmi";
import {
  DEFAULT_PRECISION,
  LIMIT_ORDER_DEADLINE,
  MARKET_ORDER_DEADLINE,
  MARKET_PRICE_COEFFICIENT,
} from "../constants/misc";
import { useAppName, useFallbackChainId } from "../state/chains/hooks";
import { makeHttpRequest } from "../utils/http";
import { OrderType, TradeState, PositionType } from "../types/trade";
import { useCurrency } from "../lib/hooks/useTokens";
import { useSupportedChainId } from "../lib/hooks/useSupportedChainId";
import { useHedgerInfo, useSetNotionalCap } from "../state/hedger/hooks";
import { getAppNameHeader } from "../state/hedger/thunks";
import {
  useActiveAccountAddress,
  useSlippageTolerance,
} from "../state/user/hooks";
import { useTransactionAdder } from "../state/transactions/hooks";
import {
  TradeTransactionInfo,
  TransactionType,
} from "../state/transactions/types";
import { ConstructCallReturnType } from "../types/web3";
import {
  useActiveMarketId,
  useLockedPercentages,
  useOrderType,
  usePositionType,
} from "../state/trade/hooks";

import {
  removeTrailingZeros,
  toBN,
  toWei,
  formatPrice,
} from "../utils/numbers";
import {
  createTransactionCallback,
  TransactionCallbackState,
} from "../utils/web3";

import { useMarket } from "../hooks/useMarkets";
import {
  useDiamondContract,
  useMultiAccountContract,
} from "../hooks/useContract";
import { useMultiAccountable } from "../hooks/useMultiAccountable";
import useTradePage, {
  useLockedCVA,
  useLockedLF,
  useMaxFundingRate,
  useNotionalValue,
  usePartyALockedMM,
  usePartyBLockedMM,
} from "../hooks/useTradePage";
import { SendQuoteClient } from "../lib/muon";
import { encodeFunctionData } from "viem";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import {
  useCollateralAddress,
  usePartyBWhitelistAddress,
} from "../state/chains/hooks";
import { SendTransactionResult } from "@wagmi/core";

export function useSentQuoteCallback(): {
  state: TransactionCallbackState;
  callback: null | (() => Promise<SendTransactionResult | undefined>);
  error: string | null;
} {
  const { account, chainId } = useActiveWagmi();
  const addTransaction = useTransactionAdder();
  const addRecentTransaction = useAddRecentTransaction();

  const activeAccountAddress = useActiveAccountAddress();
  const isSupportedChainId = useSupportedChainId();

  const DiamondContract = useDiamondContract();
  const MultiAccountContract = useMultiAccountContract();
  const functionName = "sendQuote";
  const COLLATERAL_ADDRESS = useCollateralAddress();
  const collateralCurrency = useCurrency(
    chainId ? COLLATERAL_ADDRESS[chainId] : undefined
  );
  const orderType = useOrderType();
  const positionType = usePositionType();
  const { price, formattedAmounts } = useTradePage();
  const appName = useAppName();

  const marketId = useActiveMarketId();
  const market = useMarket(marketId);
  const slippage = useSlippageTolerance();
  const pricePrecision = useMemo(
    () => market?.pricePrecision ?? DEFAULT_PRECISION,
    [market]
  );
  const openPrice = useMemo(() => (price ? price : "0"), [price]);
  const autoSlippage = market ? market.autoSlippage : MARKET_PRICE_COEFFICIENT;

  const openPriceFinal = useMemo(() => {
    if (orderType === OrderType.LIMIT) return openPrice;

    if (slippage === "auto") {
      return positionType === PositionType.SHORT
        ? toBN(openPrice).div(autoSlippage).toString()
        : toBN(openPrice).times(autoSlippage).toString();
    }

    const spSigned =
      positionType === PositionType.SHORT ? slippage : slippage * -1;
    const slippageFactored = toBN(100 - spSigned).div(100);
    return toBN(openPrice).times(slippageFactored).toString();
  }, [orderType, openPrice, slippage, positionType, autoSlippage]);

  const openPriceWied = useMemo(
    () => toWei(formatPrice(openPriceFinal, pricePrecision)),
    [openPriceFinal, pricePrecision]
  );

  const quantityAsset = useMemo(
    () => (toBN(formattedAmounts[1]).isNaN() ? "0" : formattedAmounts[1]),
    [formattedAmounts]
  );

  const notionalValue = useNotionalValue(
    quantityAsset,
    formatPrice(openPriceFinal, pricePrecision)
  );
  const lockedCVA = useLockedCVA(notionalValue);
  const lockedLF = useLockedLF(notionalValue);
  const lockedPartyAMM = usePartyALockedMM(notionalValue);
  const lockedPartyBMM = usePartyBLockedMM(notionalValue);
  const { cva, partyAmm, partyBmm, lf } = useLockedPercentages();
  const updateNotionalCap = useSetNotionalCap();

  const maxFundingRate = useMaxFundingRate();
  const { baseUrl } = useHedgerInfo() || {};
  const PARTY_B_WHITELIST = usePartyBWhitelistAddress();
  const FALLBACK_CHAIN_ID = useFallbackChainId();
  const partyBWhiteList = useMemo(
    () => [PARTY_B_WHITELIST[chainId ?? FALLBACK_CHAIN_ID]],
    [FALLBACK_CHAIN_ID, PARTY_B_WHITELIST, chainId]
  );

  const getSignature = useCallback(async () => {
    if (
      !activeAccountAddress ||
      !chainId ||
      !DiamondContract ||
      !marketId ||
      !SendQuoteClient
    ) {
      throw new Error("Missing muon params");
    }

    const { success, signature, error } = await SendQuoteClient.getMuonSig(
      activeAccountAddress,
      chainId,
      DiamondContract.address,
      marketId
    );

    if (success === false || !signature) {
      throw new Error(`Unable to fetch Muon signature: ${error}`);
    }
    return { signature };
  }, [DiamondContract, activeAccountAddress, chainId, marketId]);

  const getNotionalCap = useCallback(async () => {
    if (!market) {
      throw new Error("market is missing");
    }
    if (!MultiAccountContract) {
      throw new Error("contract is missing");
    }
    const { href: notionalCapUrl } = new URL(
      `notional_cap/${market.id}/${MultiAccountContract.address}`,
      baseUrl
    );

    const tempResponse = await makeHttpRequest<{
      total_cap: number;
      used: number;
    }>(notionalCapUrl, getAppNameHeader(appName));
    if (!tempResponse) return;
    const { total_cap, used }: { total_cap: number; used: number } =
      tempResponse;

    const freeCap = toBN(total_cap).minus(used);
    const notionalValue = toBN(openPrice).times(quantityAsset);
    updateNotionalCap({ name: market.name, used, totalCap: total_cap });

    if (freeCap.minus(notionalValue).lte(0)) {
      console.log("cap is reached but we ignore!")
      // throw new Error("Cap is reached.");
    }
  }, [
    MultiAccountContract,
    appName,
    baseUrl,
    market,
    openPrice,
    quantityAsset,
    updateNotionalCap,
  ]);

  const preConstructCall = useCallback(async (): ConstructCallReturnType => {
    try {
      if (
        !account ||
        !DiamondContract ||
        !marketId ||
        !collateralCurrency ||
        !partyBWhiteList ||
        !isSupportedChainId ||
        !cva ||
        !partyAmm ||
        !partyBmm ||
        !lf
      ) {
        throw new Error("Missing dependencies.");
      }

      await getNotionalCap();
      const { signature } = await getSignature();

      if (!signature) {
        throw new Error("Missing signature for constructCall.");
      }

      const deadline =
        orderType === OrderType.MARKET
          ? Math.floor(Date.now() / 1000) + MARKET_ORDER_DEADLINE
          : Math.floor(Date.now() / 1000) + LIMIT_ORDER_DEADLINE;

      const args = [
        partyBWhiteList,
        BigInt(marketId),
        (positionType === PositionType.SHORT ? 1 : 0) as number,
        (orderType === OrderType.MARKET ? 1 : 0) as number,
        BigInt(openPriceWied),
        BigInt(toWei(quantityAsset, 18)),
        toWei(lockedCVA),
        toWei(lockedLF),
        toWei(lockedPartyAMM), // partyAmm
        toWei(lockedPartyBMM), // partyBmm
        toWei(maxFundingRate),

        BigInt(deadline),
        signature,
      ];

      return {
        args,
        functionName,
        config: {
          account,
          to: DiamondContract.address,
          data: encodeFunctionData({
            abi: DiamondContract.abi,
            functionName,
            args,
          }),
          value: BigInt(0),
        },
      };
    } catch (error) {
      if (error && typeof error === "string") throw new Error(error);
      console.error(error, "sendQuote", JSON.stringify(error));
      throw new Error("error3");
    }
  }, [
    account,
    DiamondContract,
    marketId,
    collateralCurrency,
    partyBWhiteList,
    isSupportedChainId,
    cva,
    partyAmm,
    partyBmm,
    lf,
    getNotionalCap,
    getSignature,
    quantityAsset,
    orderType,
    positionType,
    openPriceWied,
    lockedCVA,
    lockedLF,
    lockedPartyAMM,
    lockedPartyBMM,
    maxFundingRate,
  ]);

  const constructCall = useMultiAccountable(preConstructCall);

  return useMemo(() => {
    if (
      !account ||
      !chainId ||
      !DiamondContract ||
      !market ||
      !orderType ||
      !quantityAsset ||
      !activeAccountAddress
    ) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "Missing dependencies",
      };
    }

    if (toBN(openPrice).lte(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "Price is out of range",
      };
    }
    if (toBN(quantityAsset).lte(0)) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "Amount is too low",
      };
    }

    const txInfo = {
      type: TransactionType.TRADE,
      name: market.name,
      amount: removeTrailingZeros(quantityAsset),
      price: formatPrice(price, pricePrecision, true),
      state: TradeState.OPEN,
      slippage: orderType === OrderType.LIMIT ? null : slippage,
      hedger: "",
      positionType,
    } as TradeTransactionInfo;

    const summary = `${txInfo.name} Open Order`;

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: () =>
        createTransactionCallback(
          functionName,
          MultiAccountContract,
          constructCall,
          addTransaction,
          addRecentTransaction,
          txInfo,
          summary,
          true
        ),
    };
  }, [
    account,
    chainId,
    DiamondContract,
    market,
    orderType,
    quantityAsset,
    activeAccountAddress,
    openPrice,
    price,
    pricePrecision,
    slippage,
    positionType,
    MultiAccountContract,
    constructCall,
    addTransaction,
    addRecentTransaction,
  ]);
}
