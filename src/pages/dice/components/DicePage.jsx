import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import GameReturns from './returns/GameReturns';
import BetForm from '../containers/bet/BetForm';
import GameHistory from '../containers/history/GameHistory';

const DicePage = () => (
    <Container>
        <Grid>
            <Grid.Column width={10}>
                <BetForm />
                <GameReturns />
            </Grid.Column>
            <Grid.Column width={6}>
                <GameHistory />
            </Grid.Column>
        </Grid>
    </Container>
);

export default DicePage;
