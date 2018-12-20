import { compose, withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import { withWeb3 } from '../../../../lib/web3';
import { DiceContract } from '../../../../contracts';
import RecentJacpot from '../../components/stats/RecentJackpot';

/**
 * Fetch winner of recent jackpot
 */
const fetchRecentJackpot = ({ web3 }) => () => {
    if (!web3.client) {
        return Promise.reject();
    }

    return DiceContract.instance()
        .then(instance => {
            const Event = promisify(instance.JackpotPayment, {
                context: instance,
            });

            return Event({ fromBlock: 'latest', toBlock: 'latest' });
        })
        .then(event => ({
            amount: web3.client.utils.fromWei(event.args.amount, 'ether'),
            address: event.args.beneficiary,
        }));
};

export default compose(
    withWeb3,
    withHandlers({ fetchRecentJackpot }),
)(RecentJacpot);
