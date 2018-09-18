import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import BetForm from '../components/BetForm';
import { placeBet } from '../../../actions/dice';

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
    onSubmit: ownProps => form => {
        ownProps.placeBet({ modulo: 6, ...form });
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
