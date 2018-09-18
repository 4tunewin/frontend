import React from 'react';
import { Statistic } from 'semantic-ui-react';

const BetReturns = ({ winPays, winAmount }) => (
    <div>
        <Statistic>
            <Statistic.Label>Winning bet pays</Statistic.Label>
            <Statistic.Value>{winPays}x</Statistic.Value>
        </Statistic>
        <p>You can win {winAmount} ETH</p>
        <p>1% fee, 0.001ETH to jackpot</p>
    </div>
);

export default BetReturns;
