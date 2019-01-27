import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

import Featured from '../../../app/components/Featured';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

const DicePage = () => (
    <Container>
        <Grid>
            <Grid.Column width={10}>
                <LeftColumn />
            </Grid.Column>
            <Grid.Column width={6}>
                <RightColumn />
            </Grid.Column>
        </Grid>

        <Featured />
    </Container>
);

export default DicePage;
