import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';
import { toString } from 'lodash';

import { withWeb3 } from '../../../../lib/web3';
import { DiceContract } from '../../../../contracts';
import JackpotAmount from '../../components/returns/JackpotAmount';

/**
 * Fetch jackpot value from contract
 */
const fetchJackpotAsync = ({ web3 }) => () => {
    if (!web3.client) {
        return Promise.reject();
    }

    return DiceContract.instance()
        .then(instance => {
            return instance.methods.jackpotSize().call();
        })
        .then(jackpotSize => {
            return web3.client.utils.fromWei(toString(jackpotSize), 'ether');
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
    withHandlers({ fetchJackpotAsync }),
    injectIntl,
    connect(mapStateToProps),
)(JackpotAmount);
