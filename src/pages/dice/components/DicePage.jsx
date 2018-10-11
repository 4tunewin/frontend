import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import BetForm from '../containers/BetForm';
import GameReturns from './GameReturns';
import GameHistory from '../containers/GameHistory';

const DicePage = () => (
    <Container>
        <Grid columns={3}>
            <Grid.Column>
                <BetForm />
            </Grid.Column>
            <Grid.Column>
                <GameReturns />
            </Grid.Column>
            <Grid.Column>
                <GameHistory />
            </Grid.Column>
        </Grid>
    </Container>
);

export default DicePage;
