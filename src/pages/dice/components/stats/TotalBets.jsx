import React from 'react';
import { FormattedMessage } from 'react-intl';

import StatsHelper from './StatsHelper';

const TotalBets = ({ bets }) => (
    <StatsHelper>
        <StatsHelper.Left>
            <StatsHelper.Image src="images/stats/total-bets.png" />
        </StatsHelper.Left>
        <StatsHelper.Right>
            <StatsHelper.Label>
                <FormattedMessage
                    id="pages.dice.stats.TotalBets.label"
                    defaultMessage="Total bets in 24h"
                />
            </StatsHelper.Label>
            <StatsHelper.Value>{bets}</StatsHelper.Value>
        </StatsHelper.Right>
    </StatsHelper>
);

TotalBets.defaultProps = {
    bets: 0,
};

export default TotalBets;
