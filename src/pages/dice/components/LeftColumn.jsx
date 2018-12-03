import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import GameReturns from './returns/GameReturns';
import BetForm from '../containers/bet/BetForm';
import Information from './Information';

const Section = styled.div`
    background: #27304d;
    border-radius: 10px;
    padding: 20px;
`;

const LeftColumn = () => (
    <Grid columns={1}>
        <Grid.Column>
            <Section>
                <Grid columns={1}>
                    <Grid.Column>
                        <BetForm />
                    </Grid.Column>
                    <Grid.Column>
                        <GameReturns />
                    </Grid.Column>
                </Grid>
            </Section>
        </Grid.Column>
        <Grid.Column>
            <Section>
                <Information />
            </Section>
        </Grid.Column>
    </Grid>
);

export default LeftColumn;
