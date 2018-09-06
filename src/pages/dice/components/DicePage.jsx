import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import BetForm from '../containers/BetForm';

const DicePage = () => (
    <Container>
        <Grid columns={3}>
            <Grid.Column>
                <BetForm />
            </Grid.Column>
            <Grid.Column>[INFO]</Grid.Column>
            <Grid.Column>[RESULTS]</Grid.Column>
        </Grid>
    </Container>
);

export default DicePage;
