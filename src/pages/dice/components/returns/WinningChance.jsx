/**
 * Game winning chance percentage
 */
import React from 'react';
import styled from 'styled-components';

import StatsHelper from './StatsHelper';

const Wrapper = styled.div`
    display: inline-block;
    text-align: left;
`;

const WinningChance = ({ chance }) => (
    <Wrapper>
        <StatsHelper>
            <StatsHelper.Left>
                <StatsHelper.Image src="images/returns/chance-to-win.png" />
            </StatsHelper.Left>
            <StatsHelper.Right>
                <StatsHelper.Label>Chance to win</StatsHelper.Label>
                <StatsHelper.Value>{chance.toFixed(2)}%</StatsHelper.Value>
            </StatsHelper.Right>
        </StatsHelper>
    </Wrapper>
);

export default WinningChance;
