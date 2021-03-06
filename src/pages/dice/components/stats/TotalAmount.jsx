import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { fromWei } from 'web3-utils';
import { toString } from 'lodash';

import StatsHelper from './StatsHelper';

const Eth = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'Proxima Nova Semibold';
`;

const TotalAmount = ({ amount } = { amount: 0 }) => (
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
                {parseFloat(fromWei(toString(amount || 0), 'ether')).toFixed(3)}
                <Eth>ETH</Eth>
            </StatsHelper.Value>
        </StatsHelper.Right>
    </StatsHelper>
);

export default TotalAmount;
