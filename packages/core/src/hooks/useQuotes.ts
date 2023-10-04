import { useMemo } from "react";

import { useSingleContractMultipleMethods } from "@symmio-client/core/lib/hooks/multicall";
import { OrderType, PositionType } from "@symmio-client/core/types/trade";
import { Quote, QuoteStatus } from "@symmio-client/core/types/quote";
import { BN_ZERO, fromWei, toBN } from "@symmio-client/core/utils/numbers";

import {
  useAccountPartyAStat,
  useActiveAccountAddress,
} from "@symmio-client/core/state/user/hooks";
import {
  NotificationDetails,
  NotificationType,
} from "@symmio-client/core/state/notifications/types";
import { usePartialFillNotifications } from "@symmio-client/core/state/notifications/hooks";

import { useDiamondContract } from "@symmio-client/core/hooks/useContract";
import { useMarket } from "@symmio-client/core/hooks/useMarkets";
import { useSupportedChainId } from "@symmio-client/core/lib/hooks/useSupportedChainId";
import useBidAskPrice from "./useBidAskPrice";

export function getPositionTypeByIndex(x: number): PositionType {
  return PositionType[
    Object.keys(PositionType).find(
      (key, index) => index === x
    ) as keyof typeof PositionType
  ];
}

export function getQuoteStateByIndex(x: number): QuoteStatus {
  return QuoteStatus[
    Object.keys(QuoteStatus).find(
      (key, index) => index === x
    ) as keyof typeof QuoteStatus
  ];
}

export function useGetPositions(): {
  positions: Quote[] | undefined;
  loading: boolean;
} {
  const isSupportedChainId = useSupportedChainId();
  const activeAccountAddress = useActiveAccountAddress();

  const { positionsCount } = useAccountPartyAStat(activeAccountAddress);

  const DiamondContract = useDiamondContract();

  const [start, size] = [0, positionsCount + 1];
  const calls = useMemo(
    () =>
      isSupportedChainId
        ? activeAccountAddress
          ? [
              {
                functionName: "getPartyAOpenPositions",
                callInputs: [activeAccountAddress, start, size],
              },
            ]
          : []
        : [],
    [isSupportedChainId, activeAccountAddress, start, size]
  );

  const {
    data: quoteResults,
    isLoading: isQuoteLoading,
    isSuccess: isQuoteSuccess,
  } = useSingleContractMultipleMethods(DiamondContract, calls);

  const quotesValue = useMemo(
    () =>
      isQuoteSuccess && quoteResults?.[0]?.status === "success"
        ? (quoteResults[0].result as any[])
        : [],
    [isQuoteSuccess, quoteResults]
  );

  const quotes: Quote[] = useMemo(() => {
    return (
      quotesValue
        ?.filter((quote: any) => quote[0]?.toString() !== "0") //remove garbage outputs
        .map((quote: any) => toQuote(quote))
        .sort(
          (a: Quote, b: Quote) =>
            Number(b.modifyTimestamp) - Number(a.modifyTimestamp)
        ) || []
    );
  }, [quotesValue]);

  return useMemo(
    () => ({
      positions: quotes.length > 0 ? quotes : undefined,
      loading: isQuoteLoading,
    }),
    [isQuoteLoading, quotes]
  );
}

export function useGetQuoteByIds(ids: number[]): {
  quotes: Quote[];
  loading: boolean;
} {
  const DiamondContract = useDiamondContract();
  const isSupportedChainId = useSupportedChainId();

  const calls = useMemo(
    () =>
      isSupportedChainId
        ? ids.map((id) => ({ functionName: "getQuote", callInputs: [id] }))
        : [],
    [ids, isSupportedChainId]
  );

  const {
    data: quoteResults,
    isLoading,
    isSuccess,
  } = useSingleContractMultipleMethods(DiamondContract, calls);

  const quotesValue = useMemo(
    () =>
      isSuccess &&
      quoteResults !== undefined &&
      quoteResults?.[0]?.status === "success"
        ? (quoteResults as any[])?.map((qs) =>
            qs.result
              ? qs.result["id"]
                ? qs.result
                : qs.result[0]
                ? qs.result[0]
                : null
              : null
          )
        : [],
    [isSuccess, quoteResults]
  );

  const quotes: Quote[] = useMemo(() => {
    return quotesValue
      .filter((quote: any) => quote)
      .map((quote: any) => toQuote(quote))
      .sort(
        (a: Quote, b: Quote) =>
          Number(b.modifyTimestamp) - Number(a.modifyTimestamp)
      );
  }, [quotesValue]);

  return useMemo(
    () => ({
      quotes,
      loading: isLoading,
    }),
    [isLoading, quotes]
  );
}

export function useGetPendingIds(): {
  pendingIds: number[];
  loading: boolean;
} {
  const isSupportedChainId = useSupportedChainId();
  const activeAccountAddress = useActiveAccountAddress();

  const DiamondContract = useDiamondContract();

  const calls = useMemo(
    () =>
      isSupportedChainId
        ? activeAccountAddress
          ? [
              {
                functionName: "getPartyAPendingQuotes",
                callInputs: [activeAccountAddress],
              },
            ]
          : []
        : [],
    [activeAccountAddress, isSupportedChainId]
  );

  const {
    data: quoteResults,
    isLoading,
    isSuccess,
  } = useSingleContractMultipleMethods(DiamondContract, calls);

  const quoteIdsValue = useMemo(
    () =>
      isSuccess && quoteResults?.[0]?.status === "success"
        ? (quoteResults[0].result as any[])
        : [],
    [isSuccess, quoteResults]
  );

  const quoteIds: number[] = useMemo(() => {
    return quoteIdsValue
      .map((quoteId: any) => toBN(quoteId.toString()).toNumber())
      .sort((a: number, b: number) => b - a);
  }, [quoteIdsValue]);

  return useMemo(
    () => ({
      pendingIds: quoteIds,
      loading: isLoading,
    }),
    [isLoading, quoteIds]
  );
}

export function useQuoteUpnlAndPnl(
  quote: Quote,
  currentPrice: string | number,
  quantityToClose?: string | number,
  closedPrice?: string | number
): string[] {
  // return upnl and pnl [upnl , pnl]
  const {
    openedPrice,
    positionType,
    avgClosedPrice,
    closedAmount,
    quoteStatus,
    quantity,
    liquidateAmount,
    liquidatePrice,
  } = quote;

  const pnl =
    toBN(closedPrice ?? avgClosedPrice)
      .minus(openedPrice)
      .times(quantityToClose ?? closedAmount)
      .times(positionType === PositionType.SHORT ? -1 : 1)
      .toString() || BN_ZERO.toString();

  const upnl =
    toBN(quantity)
      .minus(closedAmount)
      .times(toBN(currentPrice).minus(openedPrice))
      .times(positionType === PositionType.SHORT ? -1 : 1)
      .toString() || BN_ZERO.toString();

  if (
    quoteStatus === QuoteStatus.CLOSE_PENDING ||
    quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING ||
    quoteStatus === QuoteStatus.OPENED
  ) {
    return [upnl, pnl];
  } else if (quoteStatus === QuoteStatus.CLOSED) {
    return [BN_ZERO.toString(), pnl];
  } else if (quoteStatus === QuoteStatus.LIQUIDATED) {
    if (quantityToClose) return [BN_ZERO.toString(), pnl];

    const averagePrice = toBN(liquidatePrice)
      .times(liquidateAmount)
      .plus(toBN(avgClosedPrice).times(closedAmount))
      .div(quantity);
    return [
      BN_ZERO.toString(),
      toBN(averagePrice)
        .minus(openedPrice)
        .times(quantity)
        .times(positionType === PositionType.SHORT ? -1 : 1)
        .toString() || BN_ZERO.toString(),
    ];
  } else {
    return [BN_ZERO.toString(), BN_ZERO.toString()];
  }
}

export function useQuoteSize(quote: Quote): string {
  const { quoteStatus, quantity, closedAmount, marketId } = quote;
  const { quantityPrecision } = useMarket(marketId) || {};
  return useMemo(() => {
    if (
      quoteStatus === QuoteStatus.CLOSED ||
      quoteStatus === QuoteStatus.LIQUIDATED ||
      quoteStatus === QuoteStatus.CANCELED
    )
      return quantity;
    return toBN(quantity)
      .minus(closedAmount)
      .toFixed(quantityPrecision || 6);
  }, [closedAmount, quantity, quantityPrecision, quoteStatus]);
}

export function useQuoteLeverage(quote: Quote): string {
  const {
    orderType,
    quantity,
    marketPrice,
    requestedOpenPrice,
    quoteStatus,
    openedPrice,
    initialCVA,
    initialLF,
    initialMM,
  } = quote;

  const quoteSize = useQuoteSize(quote);
  const lockedMargin = useLockedMargin(quote);
  const initialLockedMargin = toBN(initialCVA)
    .plus(initialMM)
    .plus(initialLF)
    .toString();

  if (
    quoteStatus === QuoteStatus.OPENED ||
    quoteStatus === QuoteStatus.CLOSE_PENDING ||
    quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING
  ) {
    return toBN(quoteSize).times(openedPrice).div(lockedMargin).toFixed(0);
  } else if (
    quoteStatus === QuoteStatus.PENDING ||
    quoteStatus === QuoteStatus.LOCKED ||
    quoteStatus === QuoteStatus.CANCEL_PENDING
  ) {
    return toBN(quantity)
      .times(orderType === OrderType.LIMIT ? requestedOpenPrice : marketPrice)
      .div(lockedMargin)
      .toFixed(0);
  } else if (
    quoteStatus === QuoteStatus.CLOSED ||
    quoteStatus === QuoteStatus.LIQUIDATED
  ) {
    return toBN(quantity)
      .times(openedPrice)
      .div(initialLockedMargin)
      .toFixed(0);
  } else {
    // quoteStatus === QuoteStatus.CANCELED ||
    return toBN(quantity)
      .times(orderType === OrderType.LIMIT ? requestedOpenPrice : marketPrice)
      .div(lockedMargin)
      .toFixed(0);
  }
}

export function useQuoteFillAmount(quote: Quote): string | null {
  const { quoteStatus, orderType, id, modifyTimestamp } = quote;
  const partiallyFillNotifications: NotificationDetails[] =
    usePartialFillNotifications();
  let foundNotification: NotificationDetails | undefined | null;
  try {
    foundNotification = partiallyFillNotifications.find(
      (notification) =>
        notification.quoteId === id.toString() &&
        notification.notificationType === NotificationType.PARTIAL_FILL &&
        toBN(modifyTimestamp).lt(notification.modifyTime)
    );
  } catch (error) {
    foundNotification = null;
  }

  return useMemo(() => {
    if (
      quoteStatus === QuoteStatus.CLOSE_PENDING ||
      quoteStatus === QuoteStatus.CANCEL_CLOSE_PENDING
    ) {
      return orderType === OrderType.LIMIT &&
        foundNotification &&
        foundNotification.filledAmountClose
        ? toBN(foundNotification.filledAmountClose).toString()
        : null;
    } else if (
      quoteStatus === QuoteStatus.LOCKED ||
      quoteStatus === QuoteStatus.PENDING
    ) {
      return orderType === OrderType.LIMIT &&
        foundNotification &&
        foundNotification.filledAmountOpen
        ? toBN(foundNotification.filledAmountOpen).toString()
        : null;
    } else {
      return null;
    }
  }, [foundNotification, orderType, quoteStatus]);
}

export function useClosingLastMarketPrice(
  quote: Quote | null,
  marketName?: string,
  precision?: number
): string {
  // market price for closing position

  const { bid, ask } = useBidAskPrice(marketName, precision);

  if (quote) {
    if (quote.positionType === PositionType.LONG) {
      return bid;
    } else {
      return ask;
    }
  }

  return "0";
}

export function useOpeningLastMarketPrice(
  quote: Quote | null,
  marketName?: string,
  precision?: number
): string {
  // market price for opening position
  const { bid, ask } = useBidAskPrice(marketName, precision);

  if (quote)
    if (quote.positionType === PositionType.LONG) {
      return ask;
    } else {
      return bid;
    }

  return "0";
}

function toQuote(quote: any) {
  return {
    id: Number(quote["id"].toString()),
    partyBsWhiteList: quote["partyBsWhiteList"],
    marketId: Number(quote["symbolId"].toString()),
    positionType: getPositionTypeByIndex(
      Number(quote["positionType"].toString())
    ),
    orderType:
      Number(quote["orderType"].toString()) === 1
        ? OrderType.MARKET
        : OrderType.LIMIT,

    // Price of quote which PartyB opened in 18 decimals
    openedPrice: fromWei(quote["openedPrice"].toString()),

    // Price of quote which PartyA requested in 18 decimals
    requestedOpenPrice: fromWei(quote["requestedOpenPrice"].toString()),
    marketPrice: fromWei(quote["marketPrice"].toString()),

    // Quantity of quote which PartyA requested in 18 decimals
    quantity: fromWei(quote["quantity"].toString()),
    closedAmount: fromWei(quote["closedAmount"].toString()),

    initialCVA: fromWei(quote["initialLockedValues"]["cva"].toString()),
    initialMM: fromWei(quote["initialLockedValues"]["mm"].toString()),
    initialLF: fromWei(quote["initialLockedValues"]["lf"].toString()),

    CVA: fromWei(quote["lockedValues"]["cva"].toString()),
    MM: fromWei(quote["lockedValues"]["mm"].toString()),
    LF: fromWei(quote["lockedValues"]["lf"].toString()),

    maxInterestRate: fromWei(quote["maxInterestRate"].toString()),
    partyA: quote["partyA"].toString(),
    partyB: quote["partyB"].toString(),
    quoteStatus: getQuoteStateByIndex(Number(quote["quoteStatus"].toString())),
    avgClosedPrice: fromWei(quote["avgClosedPrice"].toString()),
    requestedCloseLimitPrice: fromWei(quote["requestedClosePrice"].toString()),
    quantityToClose: fromWei(quote["quantityToClose"].toString()),

    // handle partially open position
    parentId: quote["parentId"].toString(),
    createTimestamp: Number(quote["createTimestamp"].toString()),
    modifyTimestamp: Number(quote["modifyTimestamp"].toString()),
    deadline: Number(quote["deadline"].toString()),
  } as Quote;
}

export function useLockedMargin(quote: Quote): string {
  return toBN(quote.CVA).plus(quote.MM).plus(quote.LF).toString();
}
