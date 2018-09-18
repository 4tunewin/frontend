import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import BetForm from '../containers/BetForm';
import GameReturns from './GameReturns';

const DicePage = () => (
    <Container>
        <Grid columns={3}>
            <Grid.Column>
                <BetForm />
            </Grid.Column>
            <Grid.Column>
                <GameReturns />
            </Grid.Column>
            <Grid.Column>[RESULTS]</Grid.Column>
        </Grid>
    </Container>
);

export default DicePage;
