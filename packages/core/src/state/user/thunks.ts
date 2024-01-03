import * as toolkitRaw from "@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js";
const { createAsyncThunk } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;
import { getBalanceHistoryApolloClient } from "../../apollo/client/balanceHistory";
import {
  BALANCE_CHANGES_DATA,
  TOTAL_DEPOSITS_AND_WITHDRAWALS,
} from "../../apollo/queries";
import { makeHttpRequest } from "../../utils/http";
import { BalanceHistoryData, DepositWithdrawalsData } from "./types";
import { BALANCE_HISTORY_ITEMS_NUMBER } from "../../constants/misc";
import { getAppNameHeader } from "../hedger/thunks";
import { WEB_SETTING } from "../../config/index";
import { Address } from "viem";

export const getIsWhiteList = createAsyncThunk(
  "user/getWalletWhitelist",
  async (payload: {
    baseUrl: string;
    account: Address;
    multiAccountAddress: string | undefined;
    appName: string;
  }) => {
    const {
      baseUrl: hedgerUrl,
      account,
      multiAccountAddress,
      appName,
    } = payload;

    if (!hedgerUrl) {
      throw new Error("hedgerUrl is empty");
    }
    if (!account) {
      throw new Error("account is empty");
    }
    if (!multiAccountAddress) {
      throw new Error("multiAccountAddress is empty");
    }

    const { href: isWhiteListUrl } = new URL(
      `/check_in-whitelist/${account}/${multiAccountAddress}`,
      hedgerUrl
    );

    let isWhiteList: null | boolean = null;
    try {
      if (!WEB_SETTING.checkWhiteList) return { isWhiteList: true };

      const [whiteListRes] = await Promise.allSettled([
        makeHttpRequest<boolean>(isWhiteListUrl, getAppNameHeader(appName)),
      ]);
      if (whiteListRes.status === "fulfilled") {
        isWhiteList = true;
      }
    } catch (error) {
      isWhiteList = false;
      console.error(error, " happened in check-in-whitelist");
    }

    return { isWhiteList };
  }
);

export const getBalanceHistory = createAsyncThunk(
  "user/getBalanceHistory",
  async ({
    account,
    chainId,
    skip,
    first,
  }: {
    account: string | null | undefined;
    chainId: number | undefined;
    skip: number;
    first: number;
  }) => {
    if (!account) {
      throw new Error("account is undefined");
    }
    if (!chainId) {
      throw new Error("chainId is empty");
    }
    try {
      const client = getBalanceHistoryApolloClient(chainId);
      if (!client) return {};
      let hasMore = true;

      const {
        data: { balanceChanges },
      } = await client.query<{
        balanceChanges: BalanceHistoryData[];
      }>({
        query: BALANCE_CHANGES_DATA,
        variables: { account: account.toLowerCase(), first, skip },
        fetchPolicy: "no-cache",
      });

      if (balanceChanges.length !== BALANCE_HISTORY_ITEMS_NUMBER) {
        hasMore = false;
      }
      hasMore = true;
      return { result: balanceChanges, hasMore };
    } catch (error) {
      console.error(error);
      throw new Error(`Unable to query balance history data from Client`);
    }
  }
);

export const getTotalDepositsAndWithdrawals = createAsyncThunk(
  "user/getTotalDepositsAndWithdrawals",
  async ({
    account,
    chainId,
  }: {
    account: string | null | undefined;
    chainId: number | undefined;
  }) => {
    if (!account) {
      throw new Error("account is undefined");
    }
    if (!chainId) {
      throw new Error("chainId is empty");
    }

    try {
      const client = getBalanceHistoryApolloClient(chainId);
      if (!client) return { result: null };

      const {
        data: { accounts },
      } = await client.query<{ accounts: DepositWithdrawalsData[] }>({
        query: TOTAL_DEPOSITS_AND_WITHDRAWALS,
        variables: { id: account.toLowerCase() },
        fetchPolicy: "no-cache",
      });

      if (accounts.length) return { result: accounts[0] };
      return { result: null };
    } catch (error) {
      console.error(error);
      throw new Error(`Unable to query Deposits And Withdrawals from Client`);
    }
  }
);
