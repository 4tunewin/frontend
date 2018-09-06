import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import BetForm from '../components/BetForm';

// Init form for dice game
const withForm = reduxForm({
    form: 'dice',
});

// Handle form submission
const withSubmit = withHandlers({
    onSubmit: ownProps => form => {
        console.log(form);
    },
});

export default compose(
    withSubmit,
    withForm,
)(BetForm);
