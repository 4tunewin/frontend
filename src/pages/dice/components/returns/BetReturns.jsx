/**
 * Provide information about successfull game
 * outcome and fees.
 */
import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import StatsHelper from './StatsHelper';

import {
    HOUSE_EDGE_PERCENT,
    MIN_JACKPOT_BET,
    JACKPOT_FEE,
} from '../../../../config/const';

const Wrapper = styled.div`
    display: inline-block;
    text-align: left;
    min-width: 176px;
`;

const Note = styled.div`
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Proxima Nova Regular';

    & p {
        margin-bottom: 2px;
    }
`;

const WinAmount = styled.span`
    color: #d96974;
`;

const BetReturns = ({ amount, winPays, winAmount }) => (
    <Wrapper>
        <StatsHelper>
            <StatsHelper.Left>
                <StatsHelper.Image src="images/returns/bet-win.png" />
            </StatsHelper.Left>
            <StatsHelper.Right>
                <StatsHelper.Label>
                    <FormattedMessage
                        id="pages.dice.returns.BetReturns.label"
                        defaultMessage="Bet wins"
                    />
                </StatsHelper.Label>
                <StatsHelper.Value>x {winPays.toFixed(2)}</StatsHelper.Value>
            </StatsHelper.Right>
        </StatsHelper>
        <Note>
            <p>
                <FormattedMessage
                    id="pages.dice.returns.BetReturns.note"
                    defaultMessage="You can win: {amount}"
                    values={{
                        amount: (
                            <WinAmount>{winAmount.toFixed(3)} ETH</WinAmount>
                        ),
                    }}
                />
            </p>
            <p>
                <FormattedMessage
                    id="pages.dice.returns.BetReturns.fee"
                    defaultMessage="{fee}% fee"
                    values={{
                        fee: HOUSE_EDGE_PERCENT,
                    }}
                />

                {amount >= MIN_JACKPOT_BET && (
                    <span>
                        ,&nbsp;
                        <FormattedMessage
                            id="pages.dice.returns.BetReturns.jackpot"
                            defaultMessage="{fee} ETH to jackpot"
                            values={{
                                fee: JACKPOT_FEE,
                            }}
                        />
                    </span>
                )}
            </p>
        </Note>
    </Wrapper>
);

export default BetReturns;
