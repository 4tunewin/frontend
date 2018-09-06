import React from 'react';
import { Field } from 'redux-form';
import { Grid, Form } from 'semantic-ui-react';

import DiceSelect from './DiceSelect';
import BetAmount from './BetAmount';
import BetButton from './BetButton';

const BetForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
        <Grid columns={1}>
            <Grid.Column>
                <Field name="dices" component={DiceSelect} />
            </Grid.Column>
            <Grid.Column>
                <Field name="bet" component={BetAmount} />
            </Grid.Column>
            <Grid.Column>
                <BetButton onClick={handleSubmit} />
            </Grid.Column>
        </Grid>
    </Form>
);

export default BetForm;
