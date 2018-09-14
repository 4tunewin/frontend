import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import BetForm from '../components/BetForm';
import { DiceContract } from '../../../contracts';
import { placeBet } from '../../../actions/dice';

// Init form for dice game
const withForm = reduxForm({
    form: 'dice',
});

// Handle form submission
const withSubmit = withHandlers({
    onSubmit: ownProps => form => {
        ownProps.placeBet(form);
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
