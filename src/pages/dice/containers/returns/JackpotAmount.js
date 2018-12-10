import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { injectIntl } from 'react-intl';
import { toString } from 'lodash';

import { DiceContract } from '../../../../contracts';
import JackpotAmount from '../../components/returns/JackpotAmount';

/**
 * Fetch jackpot value from contract
 */
const fetchJackpotAsync = ownProps => () => {
    return DiceContract.deployed()
        .then(instance => {
            return instance.jackpotSize();
        })
        .then(jackpotSize => {
            return window.web3.fromWei(toString(jackpotSize), 'ether');
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
    withHandlers({ fetchJackpotAsync }),
    injectIntl,
    connect(mapStateToProps),
)(JackpotAmount);
