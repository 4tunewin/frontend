import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import ReactGA from 'react-ga';

import { withWeb3 } from '../../../../lib/web3';
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
    onSubmit: ({ web3, placeBet }) => form => {
        ReactGA.event({ category: 'Dice', action: 'Place bet' });
        placeBet(web3, { modulo: 6, ...form });
    },
});

export default compose(
    withWeb3,
    injectIntl,
    connect(
        null,
        { placeBet },
    ),
    withSubmit,
    withForm,
)(BetForm);
