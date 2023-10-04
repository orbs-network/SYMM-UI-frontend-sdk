import React from "react";
import styled, { useTheme } from "styled-components";
import { Token } from "@uniswap/sdk-core";

import { formatAmount, fromWei, toBN } from "@symmio-client/core/utils/numbers";
import { getTokenWithFallbackChainId } from "@symmio-client/core/utils/token";
import { COLLATERAL_TOKEN } from "@symmio-client/core/constants/tokens";
import { ConnectionStatus } from "@symmio-client/core/state/user/types";

import { useUpnlWebSocketStatus } from "@symmio-client/core/state/user/hooks";

import { ApiState } from "@symmio-client/core/types/api";

import {
  useAccountPartyAStat,
  useActiveAccountAddress,
  useTotalDepositsAndWithdrawals,
} from "@symmio-client/core/state/user/hooks";
import useActiveWagmi from "@symmio-client/core/lib/hooks/useActiveWagmi";

import { Row, RowBetween } from "components/Row";
import { UpnlValue } from "components/App/AccountData/AccountUpnl";
import ShimmerAnimation from "components/ShimmerAnimation";

const Wrapper = styled(RowBetween)<{ color?: string }>`
  margin-top: 5px;
  background: ${({ theme, color }) => color ?? theme.bg0};
`;

const UPNLText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text4};
`;

export default function UPNLBar() {
  const { chainId } = useActiveWagmi();
  const collateralCurrency = getTokenWithFallbackChainId(
    COLLATERAL_TOKEN,
    chainId
  );
  const { value, color, bgColor, isLoading } = usePnlValues(collateralCurrency);

  return (
    <Wrapper padding={"12px 16px"} color={bgColor}>
      <Row gap={"12px"}>
        <UPNLText>PNL:</UPNLText>
        <UpnlValue size={"20px"} color={color}>
          {isLoading && chainId ? (
            <ShimmerAnimation width={"120px"} height={"24px"} />
          ) : (
            `${value} ${collateralCurrency?.symbol}`
          )}
        </UpnlValue>
      </Row>
    </Wrapper>
  );
}

function usePnlValues(currency: Token) {
  const theme = useTheme();
  const activeAccountAddress = useActiveAccountAddress();
  const { allocatedBalance, accountBalance } =
    useAccountPartyAStat(activeAccountAddress);
  const { depositWithdrawalsData, depositWithdrawalsState } =
    useTotalDepositsAndWithdrawals();
  const accountConnectionLoadingStatus = useUpnlWebSocketStatus();
  const loading = accountConnectionLoadingStatus === ConnectionStatus.CLOSED;

  if (
    depositWithdrawalsState === ApiState.LOADING ||
    !depositWithdrawalsData ||
    loading
  )
    return {
      value: "0",
      color: undefined,
      bgColor: theme.bg3,
      isLoading: true,
    };

  const { deposit: totalDeposit, withdraw: totalWithdraw } =
    depositWithdrawalsData;
  const pnlBN = toBN(allocatedBalance)
    .plus(accountBalance)
    .plus(fromWei(totalWithdraw, currency.decimals))
    .minus(fromWei(totalDeposit, currency.decimals));

  if (pnlBN.isGreaterThan(0))
    return {
      value: `+ ${formatAmount(pnlBN)}`,
      color: theme.green1,
      bgColor: theme.bgWin,
      isLoading: false,
    };
  else if (pnlBN.isLessThan(0))
    return {
      value: `- ${formatAmount(Math.abs(pnlBN.toNumber()))}`,
      color: theme.red1,
      bgColor: theme.bgLoose,
      isLoading: false,
    };
  return {
    value: `${formatAmount(pnlBN)}`,
    color: undefined,
    bgColor: theme.bg3,
    isLoading: false,
  };
}
