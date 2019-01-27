import React from 'react';
import { FormattedMessage } from 'react-intl';

import StatsHelper from './StatsHelper';

const TotalBets = ({ bets } = { bets: 0 }) => (
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
            <StatsHelper.Value>{bets || 0}</StatsHelper.Value>
        </StatsHelper.Right>
    </StatsHelper>
);

export default TotalBets;
