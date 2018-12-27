import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';
import { toString } from 'lodash';

import { withWeb3 } from '../../../../lib/web3';
import { DiceContract } from '../../../../contracts';
import JackpotAmount from '../../components/returns/JackpotAmount';

const fetchJackpot = web3 => {
    return DiceContract.instance()
        .then(instance => {
            return instance.methods.jackpotSize().call();
        })
        .then(jackpotSize => {
            return web3.client.utils.fromWei(toString(jackpotSize), 'ether');
        });
};

/**
 * Fetch jackpot value from contract
 */
const fetchJackpotAsync = ({ web3 }) => () => {
    if (!web3.client) {
        return Promise.reject();
    }

    return fetchJackpot(web3);
};

const onSubscribeJackpot = ({ web3 }) => async cb => {
    if (!web3.client) {
        return Promise.reject();
    }

    const contract = await DiceContract.instance();
    contract.events.BetPlaced().on('data', async e => {
        const jackpot = await fetchJackpot(web3);
        cb(jackpot);
    });
};

/**
 * Provide amount value specified in form
 */
const mapStateToProps = state => {
    const values = getFormValues('dice')(state);
    return {
        amount: values.amount,
    };
};

export default compose(
    withWeb3,
    withHandlers({ fetchJackpotAsync, onSubscribeJackpot }),
    injectIntl,
    connect(mapStateToProps),
)(JackpotAmount);
