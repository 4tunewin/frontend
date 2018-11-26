/**
 * Provide information about successfull game
 * outcome and fees.
 */
import React from 'react';
import styled from 'styled-components';
import Statistic from './Statistic';

import {
    HOUSE_EDGE_PERCENT,
    MIN_JACKPOT_BET,
    JACKPOT_FEE,
} from '../../../../config/const';

const Note = styled.div`
    margin-top: 5px;
    color: rgba(255, 255, 255, 0.6);

    & p {
        margin-bottom: 2px;
    }
`;

const WinAmount = styled.span`
    color: #d96974;
`;

const BetReturns = ({ amount, winPays, winAmount }) => (
    <div>
        <Statistic>
            <Statistic.Left>
                <Statistic.Image src="images/returns/bet-win.png" />
            </Statistic.Left>
            <Statistic.Right>
                <Statistic.Label>Bet wins</Statistic.Label>
                <Statistic.Value>x {winPays.toFixed(2)}</Statistic.Value>
            </Statistic.Right>
        </Statistic>
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
    </div>
);

export default BetReturns;
