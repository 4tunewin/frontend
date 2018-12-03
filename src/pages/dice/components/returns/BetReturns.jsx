/**
 * Provide information about successfull game
 * outcome and fees.
 */
import React from 'react';
import styled from 'styled-components';

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
                <StatsHelper.Label>Bet wins</StatsHelper.Label>
                <StatsHelper.Value>x {winPays.toFixed(2)}</StatsHelper.Value>
            </StatsHelper.Right>
        </StatsHelper>
        <Note>
            <p>
                You can win: <WinAmount>{winAmount.toFixed(3)} ETH</WinAmount>
            </p>
            <p>
                <span>{HOUSE_EDGE_PERCENT}% fee</span>
                {amount >= MIN_JACKPOT_BET && (
                    <span>, {JACKPOT_FEE} ETH to jackpot</span>
                )}
            </p>
        </Note>
    </Wrapper>
);

export default BetReturns;
