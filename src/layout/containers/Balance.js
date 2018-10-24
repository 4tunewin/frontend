import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { promisify } from 'bluebird';

import Balance from '../components/Balance';

// An interval to update user balance
const UPDATE_BALANCE_INTERVAL = 1000;

// State stores balance amount
const withAmount = withState('amount', 'setAmount', 0);

const { web3 } = window;

/**
 * Handler performs balance update
 */
const updateHandler = withHandlers({
    updateAmount: ({ setAmount }) => {
        const getBalance = promisify(web3.eth.getBalance, { context: web3 });

        return async () => {
            try {
                const balance = await getBalance(web3.eth.accounts[0]);
                setAmount(web3.fromWei(balance.toNumber(), 'ether'));
            } catch (e) {
                console.error(e);
            }
        };
    },
});

/**
 * Setup balance right away and periodically with some interval
 */
const componentDidMount = async function() {
    const { updateAmount } = this.props;

    updateAmount();
    setInterval(updateAmount, UPDATE_BALANCE_INTERVAL);
};

export default compose(
    withAmount,
    updateHandler,
    lifecycle({ componentDidMount }),
)(Balance);
