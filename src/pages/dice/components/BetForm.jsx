import React from 'react';
import { Field } from 'redux-form';
import { Grid, Form, Message } from 'semantic-ui-react';

import DiceSelect from './DiceSelect';
import BetAmount from './BetAmount';
import BetButton from './BetButton';

const ErrorMessage = ({ error }) => <Message negative>{error}</Message>;

const BetForm = ({ handleSubmit, error }) => (
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
                {error && <ErrorMessage error={error} />}
            </Grid.Column>
        </Grid>
    </Form>
);

export default BetForm;
