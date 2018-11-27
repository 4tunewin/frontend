/**
 * P
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';

import WinningChance from '../../containers/returns/WinningChance';
import BetReturns from '../../containers/returns/BetReturns';
import JackpotAmount from '../../containers/returns/JackpotAmount';

const GameReturns = () => (
    <Grid columns={3}>
        <Grid.Column textAlign="center">
            <WinningChance />
        </Grid.Column>
        <Grid.Column textAlign="center">
            <BetReturns />
        </Grid.Column>
        <Grid.Column textAlign="center">
            <JackpotAmount />
        </Grid.Column>
    </Grid>
);

export default GameReturns;
