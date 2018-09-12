import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import BetForm from '../components/BetForm';
import { DiceContract } from '../../../contracts';

// Init form for dice game
const withForm = reduxForm({
    form: 'dice',
});

// Handle form submission
const withSubmit = withHandlers({
    onSubmit: ownProps => form => {
        const { web3 } = window;
        DiceContract.deployed()
            .then(instance => {
                return instance.placeBet(1, 6, 200, 1, 2, 3, 4, {
                    from: web3.eth.accounts[0],
                    value: web3.toWei(form.amount, 'ether'),
                });
            })
            .then(console.log)
            .catch(console.log);
    },
});

export default compose(
    withSubmit,
    withForm,
)(BetForm);
