import { useCallback, useMemo } from "react";

import {
  createTransactionCallback,
  TransactionCallbackState,
} from "@symmio-client/core/utils/web3";

// import { useExpertMode } from 'state/user/hooks'
import useActiveWagmi from "@symmio-client/core/lib/hooks/useActiveWagmi";
import { useSupportedChainId } from "@symmio-client/core/lib/hooks/useSupportedChainId";
import { useTransactionAdder } from "@symmio-client/core/state/transactions/hooks";
import {
  AddAccountTransactionInfo,
  TransactionType,
} from "@symmio-client/core/state/transactions/types";

import { useMultiAccountContract } from "@symmio-client/core/hooks/useContract";
import { useAddRecentTransaction } from "@rainbow-me/rainbowkit";
import { encodeFunctionData } from "viem";
import { ConstructCallReturnType } from "@symmio-client/core/types/web3";
import { useWalletClient } from "wagmi";

export function useAddAccountToContract(accountName: string): {
  state: TransactionCallbackState;
  callback: null | (() => Promise<any>);
  error: string | null;
} {
  const { account, chainId } = useActiveWagmi();
  const addTransaction = useTransactionAdder();
  // const userExpertMode = useExpertMode()
  const isSupportedChainId = useSupportedChainId();
  const Contract = useMultiAccountContract();
  const addRecentTransaction = useAddRecentTransaction();

  const functionName = "addAccount";

  const constructCall = useCallback(async (): ConstructCallReturnType => {
    try {
      if (!Contract || !accountName || !isSupportedChainId || !account) {
        throw new Error("Missing dependencies.");
      }

      const args = [accountName];

      return {
        args,
        functionName,
        config: {
          account,
          to: Contract.address,
          data: encodeFunctionData({
            abi: Contract.abi,
            functionName,
            args,
          }),
          value: BigInt(0),
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  }, [Contract, account, accountName, isSupportedChainId]);

  return useMemo(() => {
    if (!account || !chainId || !Contract || !accountName) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "Missing dependencies",
      };
    }

    const txInfo = {
      type: TransactionType.ADD_ACCOUNT,
      name: accountName,
    } as AddAccountTransactionInfo;

    const summary = `Add new account [${txInfo.name}]}`;

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: () =>
        createTransactionCallback(
          functionName,
          Contract,
          constructCall,
          addTransaction,
          addRecentTransaction,
          txInfo,
          summary
        ),
    };
  }, [
    account,
    chainId,
    Contract,
    accountName,
    constructCall,
    addTransaction,
    addRecentTransaction,
  ]);
}

export function useSignMessage(message: string): {
  state: TransactionCallbackState;
  callback: null | (() => Promise<string>);
  error: string | null;
} {
  const { account, chainId } = useActiveWagmi();
  const { data: provider } = useWalletClient();
  const Contract = useMultiAccountContract();

  return useMemo(() => {
    if (!account || !chainId || !Contract || !provider) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "Missing dependencies",
      };
    }
    if (!message) {
      return {
        state: TransactionCallbackState.INVALID,
        callback: null,
        error: "No message provided",
      };
    }

    return {
      state: TransactionCallbackState.VALID,
      error: null,
      callback: async function onSign(): Promise<string> {
        console.log("onSign callback");
        return provider
          .signMessage({ message })
          .then((response) => {
            console.log(response);
            return response;
          })
          .catch((error) => {
            // if the user rejected the tx, pass this along
            if (error?.code === 4001) {
              throw new Error("Transaction rejected.");
            } else if (error?.code === "ACTION_REJECTED") {
              // otherwise, the error was unexpected and we need to convey that
              // console.error(`Transaction failed`, error, address, calldata, value)
              throw new Error(`Transaction rejected`);
            } else {
              throw new Error(`Transaction rejected`);
            }

            // if (error?.code === 'ACTION_REJECTED') {
            //   toast.error(DefaultHandlerError(error))
            //   // throw new Error('Transaction rejected.')
            // } else {
            //   // otherwise, the error was unexpected and we need to convey that
            //   console.error(`Transaction failed`, error, address, calldata, value)
            //   toast.error(`Transaction failed: ${error.message}`)
            //   // throw new Error(`Transaction failed: ${error.message}`)
            // }
          });
      },
    };
  }, [account, chainId, provider, Contract, message]);
}
