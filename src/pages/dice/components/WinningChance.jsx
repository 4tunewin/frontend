/**
 * Game winning chance percentage
 */
import React from 'react';
import { Statistic } from 'semantic-ui-react';

const WinningChance = ({ chance }) => (
    <Statistic>
        <Statistic.Label>Winning Chance</Statistic.Label>
        <Statistic.Value>{chance}%</Statistic.Value>
    </Statistic>
);

export default WinningChance;
