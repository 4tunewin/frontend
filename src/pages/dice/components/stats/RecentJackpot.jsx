import React from 'react';
import styled from 'styled-components';
import { withProps, compose } from 'recompose';
import { FormattedMessage } from 'react-intl';
import { fromWei } from 'web3-utils';
import { toString } from 'lodash';

import { ExplorerLink } from '../../../../common';
import StatsHelper from './StatsHelper';

const Eth = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'Proxima Nova Semibold';
`;

const RecentJackpot = ({ jackpot }) => (
    <StatsHelper>
        <StatsHelper.Left>
            <StatsHelper.Image src="images/stats/jackpot.png" />
        </StatsHelper.Left>
        <StatsHelper.Right>
            <StatsHelper.Label>
                <FormattedMessage
                    id="pages.dice.stats.RecentJackpot.label"
                    defaultMessage="Most recent jackpot won by {address}"
                    values={{
                        address: (
                            <ExplorerLink
                                address={jackpot.address}
                                length={8}
                            />
                        ),
                    }}
                />
            </StatsHelper.Label>
            <StatsHelper.Value>
                {parseFloat(
                    fromWei(toString(jackpot.amount || 0), 'ether'),
                ).toFixed(3)}
                <Eth>ETH</Eth>
            </StatsHelper.Value>
        </StatsHelper.Right>
    </StatsHelper>
);

export default compose(
    withProps(ownProps => ({ jackpot: ownProps.jackpot || {} })),
)(RecentJackpot);
