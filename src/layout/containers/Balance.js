import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { promisify } from 'bluebird';

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

        const getBalance = promisify(web3.client.eth.getBalance, {
            context: web3.client,
        });

        return async () => {
            try {
                const balance = await getBalance(web3.client.eth.accounts[0]);
                setAmount(web3.client.fromWei(balance.toNumber(), 'ether'));
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
