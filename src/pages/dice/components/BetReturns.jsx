/**
 * Provide information about successfull game
 * outcome and fees.
 */
import React from 'react';
import { Statistic } from 'semantic-ui-react';

import {
    HOUSE_EDGE_PERCENT,
    MIN_JACKPOT_BET,
    JACKPOT_FEE,
} from '../../../config/const';

const BetReturns = ({ amount, winPays, winAmount }) => (
    <div>
        <Statistic>
            <Statistic.Label>Winning bet pays</Statistic.Label>
            <Statistic.Value>{winPays.toFixed(2)} X</Statistic.Value>
        </Statistic>
        <p>You can win {winAmount.toFixed(3)} ETH</p>
        <p>
            <span>{HOUSE_EDGE_PERCENT}% fee</span>
            {amount >= MIN_JACKPOT_BET && (
                <span>, {JACKPOT_FEE} ETH to jackpot</span>
            )}
        </p>
    </div>
);

export default BetReturns;
