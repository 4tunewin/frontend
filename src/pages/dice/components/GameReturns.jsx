/**
 * P
 */
import React from 'react';
import { Grid } from 'semantic-ui-react';

import WinningChance from '../containers/WinningChance';
import BetReturns from '../containers/BetReturns';

const GameReturns = () => (
    <Grid columns={1}>
        <Grid.Column textAlign="center">
            <WinningChance />
        </Grid.Column>
        <Grid.Column textAlign="center">
            <BetReturns />
        </Grid.Column>
    </Grid>
);

export default GameReturns;
