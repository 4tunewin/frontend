import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import StatsHelper from './StatsHelper';

const Eth = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'Proxima Nova Semibold';
`;

const TotalAmount = ({ amount }) => (
    <StatsHelper>
        <StatsHelper.Left>
            <StatsHelper.Image src="images/stats/total-amount.png" />
        </StatsHelper.Left>
        <StatsHelper.Right>
            <StatsHelper.Label>
                <FormattedMessage
                    id="pages.dice.stats.TotalAmount.label"
                    defaultMessage="Total amount in 24h"
                />
            </StatsHelper.Label>
            <StatsHelper.Value>
                {parseFloat(amount || 0).toFixed(3)}
                <Eth>ETH</Eth>
            </StatsHelper.Value>
        </StatsHelper.Right>
    </StatsHelper>
);

export default TotalAmount;
