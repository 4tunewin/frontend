import { compose, withHandlers } from 'recompose';
import { promisify } from 'bluebird';

import { DiceContract } from '../../../../contracts';
import RecentJacpot from '../../components/stats/RecentJackpot';

/**
 * Fetch winner of recent jackpot
 */
const fetchRecentJackpot = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            const Event = promisify(instance.JackpotPayment, {
                context: instance,
            });

            return Event({ fromBlock: 'latest', toBlock: 'latest' });
        })
        .then(event => ({
            amount: window.web3.fromWei(event.args.amount, 'ether'),
            address: event.args.beneficiary,
        }));
};

export default compose(withHandlers({ fetchRecentJackpot }))(RecentJacpot);
