import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { Quote } from "@symmio-client/core/types/quote";
import { PositionType } from "@symmio-client/core/types/trade";
import { formatTimestamp } from "@symmio-client/core/utils/time";
import { formatAmount, toBN } from "@symmio-client/core/utils/numbers";

import { useMarketData } from "@symmio-client/core/state/hedger/hooks";

import { useMarket } from "@symmio-client/core/hooks/useMarkets";
import {
  useLockedMargin,
  useQuoteLeverage,
  useQuoteSize,
  useQuoteUpnlAndPnl,
} from "@symmio-client/core/hooks/useQuotes";

import { LongArrow, ShortArrow } from "components/Icons";
import ClosedAmountDetails from "./ClosedSizeDetails/ClosedAmountDetails";
import {
  ContentWrapper,
  DataWrap,
  Label,
  Value,
  Row,
  TopWrap,
  PositionInfoBox,
  MarketName,
  Wrapper,
  Leverage,
  QuoteData,
  PositionPnl,
  Chevron,
  FlexColumn,
  RowPnl,
} from "components/App/AccountData/PositionDetails/styles";
import { RowEnd, Row as RowComponent } from "components/Row";
import PositionDetailsNavigator from "./PositionDetailsNavigator";

const LiquidateWrap = styled(DataWrap)`
  background: ${({ theme }) => theme.bgLoose};
`;

const LiquidateLabel = styled(Label)`
  color: ${({ theme }) => theme.red1};
`;

export default function LiquidatedQuoteDetails({
  quote,
  platformFee,
  mobileVersion = false,
}: {
  quote: Quote;
  platformFee: string;
  mobileVersion: boolean;
}): JSX.Element {
  const theme = useTheme();
  const {
    id,
    positionType,
    marketId,
    createTimestamp,
    modifyTimestamp,
    liquidateAmount,
    liquidatePrice,
    openedPrice,
  } = quote;
  const { symbol, name, asset } = useMarket(marketId) || {};
  const marketData = useMarketData(name);

  const quoteSize = useQuoteSize(quote);
  const leverage = useQuoteLeverage(quote);
  const lockedAmount = useLockedMargin(quote);
  const [, pnl] = useQuoteUpnlAndPnl(quote, marketData?.markPrice || 0);
  const [expanded, setExpanded] = useState(!mobileVersion);
  useEffect(() => {
    if (!mobileVersion) {
      setExpanded(true);
    }
  }, [mobileVersion]);
  function getPnlData(value: string) {
    const valueBN = toBN(value);
    const valuePercent = valueBN
      .div(quoteSize)
      .div(openedPrice)
      .times(leverage)
      .times(100)
      .toFixed(2);

    if (valueBN.isGreaterThan(0))
      return [`+ $${formatAmount(valueBN)}`, valuePercent, theme.green1];
    else if (valueBN.isLessThan(0))
      return [
        `- $${formatAmount(Math.abs(valueBN.toNumber()))}`,
        valuePercent,
        theme.red1,
      ];
    return [`$${formatAmount(valueBN)}`, valuePercent, theme.text1];
  }

  const [PNL, PNLPercent, PNLColor] = getPnlData(pnl);

  return (
    <>
      <TopWrap
        onClick={() => {
          if (mobileVersion) {
            setExpanded(!expanded);
          }
        }}
        mobileVersion={mobileVersion}
        expand={expanded}
      >
        <FlexColumn flex={4} alignItems={"flex-start"}>
          <PositionInfoBox>
            <RowComponent width={"initial"}>
              <MarketName>
                <div>
                  {symbol}-{asset}
                </div>
                <div>-Q{id}</div>
              </MarketName>
              <Leverage>{leverage}x</Leverage>
              <QuoteData>
                {positionType}
                {positionType === PositionType.LONG ? (
                  <LongArrow width={16} height={12} color={theme.green1} />
                ) : (
                  <ShortArrow width={16} height={12} color={theme.red1} />
                )}
              </QuoteData>
            </RowComponent>

            {!mobileVersion && <PositionDetailsNavigator />}
          </PositionInfoBox>

          {mobileVersion && (
            <RowPnl>
              <Label>PNL:</Label>
              <PositionPnl color={PNLColor}>{`${PNL} (${Math.abs(
                Number(PNLPercent)
              )}%)`}</PositionPnl>
            </RowPnl>
          )}
        </FlexColumn>
        {mobileVersion && (
          <FlexColumn flex={1} alignItems={"flex-end"}>
            <Chevron open={expanded} />
          </FlexColumn>
        )}
      </TopWrap>
      {expanded && (
        <Wrapper>
          <LiquidateWrap>
            <Row>
              <LiquidateLabel>PNL:</LiquidateLabel>
              <RowEnd>
                <PositionPnl color={PNLColor}>{`${PNL} (${Math.abs(
                  Number(PNLPercent)
                )}%)`}</PositionPnl>
              </RowEnd>
            </Row>
            <Row>
              <LiquidateLabel>Liquidated Size:</LiquidateLabel>
              <Value>{`${formatAmount(
                liquidateAmount,
                6,
                true
              )} ${symbol}`}</Value>
            </Row>
            <Row>
              <LiquidateLabel>Liquidated Price:</LiquidateLabel>
              <Value>{`${formatAmount(
                liquidatePrice,
                6,
                true
              )} ${asset}`}</Value>
            </Row>
          </LiquidateWrap>
          <ClosedAmountDetails quote={quote} />
          <ContentWrapper>
            <Row>
              <Label>Liquidated Time:</Label>
              <Value>{formatTimestamp(modifyTimestamp * 1000)}</Value>
            </Row>
            <Row>
              <Label>Created Time:</Label>
              <Value>{formatTimestamp(createTimestamp * 1000)}</Value>
            </Row>

            <Row>
              <Label>Locked Amount:</Label>
              <Value>{`${formatAmount(lockedAmount, 6, true)} ${asset}`}</Value>
            </Row>
            <Row>
              <Label>Platform Fee:</Label>
              <Value>{`${formatAmount(platformFee, 6, true)} ${asset}`}</Value>
            </Row>
          </ContentWrapper>
        </Wrapper>
      )}
    </>
  );
}
