import { useMemo } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";

import useActiveWagmi from "@symmio-client/core/lib/hooks/useActiveWagmi";

import { FALLBACK_CHAIN_ID } from "@symmio-client/core/constants/chains";
import { ChainInfo } from "@symmio-client/core/constants/chainInfo";

import { useSupportedChainId } from "@symmio-client/core/lib/hooks/useSupportedChainId";
import useRpcChangerCallback from "@symmio-client/core/lib/hooks/useRpcChangerCallback";

import { MainButton } from "components/Button";
import { SwitchWallet } from "components/Icons";
import GradientButton from "components/Button/GradientButton";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const IconWrap = styled.div`
  position: absolute;
  right: 10px;
  top: 6px;
`;
const ConnectWrap = styled.div`
  position: absolute;
  right: 10px;
`;

export enum ContextError {
  ACCOUNT,
  CHAIN_ID,
  VALID,
}

export function useInvalidContext() {
  const { chainId, account } = useActiveWagmi();
  const isSupportedChainId = useSupportedChainId();
  return useMemo(
    () =>
      !account || !chainId
        ? ContextError.ACCOUNT
        : !isSupportedChainId
        ? ContextError.CHAIN_ID
        : ContextError.VALID,
    [account, chainId, isSupportedChainId]
  );
}

export function InvalidContext() {
  const invalidContext = useInvalidContext();
  const rpcChangerCallback = useRpcChangerCallback();
  const fallbackChainInfo = ChainInfo[FALLBACK_CHAIN_ID];
  const { openConnectModal } = useConnectModal();

  return useMemo(() => {
    if (invalidContext === ContextError.ACCOUNT) {
      return (
        <>
          <MainButton onClick={openConnectModal}>
            Connect Wallet
            <ConnectWrap>
              <SwitchWallet />
            </ConnectWrap>
          </MainButton>
        </>
      );
    }
    if (invalidContext === ContextError.CHAIN_ID) {
      return (
        <>
          <GradientButton
            label={`Switch Network to ${fallbackChainInfo.chainName}`}
            onClick={() => rpcChangerCallback(FALLBACK_CHAIN_ID)}
          >
            <IconWrap>
              <Image
                src={fallbackChainInfo.logoUrl}
                alt={fallbackChainInfo.label}
                width={24}
                height={24}
              />
            </IconWrap>
          </GradientButton>
        </>
      );
    }
    return null;
  }, [fallbackChainInfo, invalidContext, openConnectModal, rpcChangerCallback]);
}
