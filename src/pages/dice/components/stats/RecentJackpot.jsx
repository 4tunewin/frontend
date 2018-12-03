import React from 'react';
import styled from 'styled-components';

import { ExplorerLink, AsyncValue } from '../../../../common';
import StatsHelper from './StatsHelper';

const Eth = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'Proxima Nova Semibold';
`;

const RecentJackpot = ({ fetchRecentJackpot }) => (
    <AsyncValue fetch={fetchRecentJackpot} placeholder={{ value: {} }}>
        {({ value: { amount, address } }) => (
            <StatsHelper>
                <StatsHelper.Left>
                    <StatsHelper.Image src="images/stats/jackpot.png" />
                </StatsHelper.Left>
                <StatsHelper.Right>
                    <StatsHelper.Label>
                        Most recent jackpot won by{' '}
                        <ExplorerLink address={address} length={8} />
                    </StatsHelper.Label>
                    <StatsHelper.Value>
                        {parseFloat(amount || 0).toFixed(3)}
                        <Eth>ETH</Eth>
                    </StatsHelper.Value>
                </StatsHelper.Right>
            </StatsHelper>
        )}
    </AsyncValue>
);

export default RecentJackpot;
