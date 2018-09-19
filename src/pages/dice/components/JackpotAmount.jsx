import React from 'react';
import { Statistic } from 'semantic-ui-react';
import { AsyncValue } from '../../../components';

import { MIN_JACKPOT_BET, JACKPOT_CHANCE } from '../../../config/const';

const JackpotAmount = ({ amount, fetchJackpotAsync }) => (
    <div>
        <Statistic>
            <Statistic.Label>Jackpot contains</Statistic.Label>
            <Statistic.Value>
                <AsyncValue fetch={fetchJackpotAsync} placeholder="0.000" />
            </Statistic.Value>
        </Statistic>
        {amount < MIN_JACKPOT_BET ? (
            <p>Bet {MIN_JACKPOT_BET.toFixed(2)} ETH to qualify</p>
        ) : (
            <p>{JACKPOT_CHANCE}% jackpot chance!</p>
        )}
    </div>
);

export default JackpotAmount;
