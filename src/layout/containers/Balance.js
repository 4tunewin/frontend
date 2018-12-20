import { compose, withState, withHandlers, lifecycle } from 'recompose';

import { withWeb3 } from '../../lib/web3';
import Balance from '../components/Balance';

// An interval to update user balance
const UPDATE_BALANCE_INTERVAL = 1000;

// State stores balance amount
const withAmount = withState('amount', 'setAmount', 0);

/**
 * Handler performs balance update
 */
const updateHandler = withHandlers({
    updateAmount: ({ web3, setAmount }) => {
        if (!web3.client) {
            return () => Promise.resolve();
        }

        return async () => {
            try {
                const balance = await web3.client.eth.getBalance(web3.account);
                setAmount(web3.client.utils.fromWei(balance, 'ether'));
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
    withWeb3,
    withAmount,
    updateHandler,
    lifecycle({ componentDidMount }),
)(Balance);
