/**
 * Game winning chance percentage
 */
import React from 'react';
import Statistic from './Statistic';

const WinningChance = ({ chance }) => (
    <Statistic>
        <Statistic.Left>
            <Statistic.Image src="images/returns/chance-to-win.png" />
        </Statistic.Left>
        <Statistic.Right>
            <Statistic.Label>Chance to win</Statistic.Label>
            <Statistic.Value>{chance}%</Statistic.Value>
        </Statistic.Right>
    </Statistic>
);

export default WinningChance;
