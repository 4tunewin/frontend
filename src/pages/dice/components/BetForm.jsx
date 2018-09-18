import React from 'react';
import { Field } from 'redux-form';
import { Grid, Form } from 'semantic-ui-react';

import DiceSelect from './DiceSelect';
import BetAmount from './BetAmount';
import BetButton from './BetButton';
import BetFailed from '../containers/BetFailed';

const BetForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Grid columns={1}>
            <Grid.Column>
                <Field name="dices" component={DiceSelect} />
            </Grid.Column>
            <Grid.Column>
                <Field name="amount" component={BetAmount} />
            </Grid.Column>
            <Grid.Column>
                <BetButton onClick={handleSubmit} />
                <BetFailed />
            </Grid.Column>
        </Grid>
    </Form>
);

export default BetForm;
