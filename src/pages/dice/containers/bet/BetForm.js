import { reduxForm, SubmissionError } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import BetForm from '../../components/bet/BetForm';
import { placeBet } from '../../../../actions/dice';

// Init form for dice game
const withForm = reduxForm({
    form: 'dice',
    initialValues: {
        dices: [1],
        amount: 0.05,
    },
});

// Handle form submission
const withSubmit = withHandlers({
    onSubmit: ({ placeBet }) => form => {
        return new Promise((resolve, reject) => {
            placeBet(resolve, reject, { modulo: 6, ...form });
        }).catch(error => {
            throw new SubmissionError(error);
        });
    },
});

export default compose(
    connect(
        null,
        { placeBet },
    ),
    withSubmit,
    withForm,
)(BetForm);
