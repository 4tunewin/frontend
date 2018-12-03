import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { Grid, Form } from 'semantic-ui-react';

import { ErrorMessage } from '../../../../common';
import DiceSelect from './DiceSelect';
import BetAmount from './BetAmount';
import BetButton from './BetButton';

const Title = styled.div`
    font-family: 'Proxima Nova Semibold';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    border-bottom: 1px solid #3d455f;
    padding-bottom: 15px;
    margin-bottom: 20px;
`;

const BetForm = ({ handleSubmit, error }) => (
    <Form onSubmit={handleSubmit}>
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <Title>Choice the dice number(s) to bet on</Title>
                    <Field name="dices" component={DiceSelect} />
                </Grid.Column>
                <Grid.Column>
                    <Title>Your bet in eth</Title>
                    <Field name="amount" component={BetAmount} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <BetButton onClick={handleSubmit} />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Form>
);

export default BetForm;
