import { withHandlers } from 'recompose';

import { DiceContract } from '../../../contracts';
import JackpotAmount from '../components/JackpotAmount';

/**
 * Fetch jackpot value from contract
 */
const fetchJackpotAsync = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            return instance.jackpotSize();
        })
        .then(jackpotSize => {
            return window.web3.fromWei(jackpotSize, 'ether');
        })
        .then(jackpotSize => {
            return jackpotSize.toFixed(3);
        });
};

export default withHandlers({ fetchJackpotAsync })(JackpotAmount);
