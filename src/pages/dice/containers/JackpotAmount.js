import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { compose, withProps, withState, lifecycle } from 'recompose';
import { round } from 'lodash';

import { DiceContract } from '../../../contracts';
import JackpotAmount from '../components/JackpotAmount';

const mapStateToProps = state => {
    const values = getFormValues('dice')(state);
    if (values) {
        return { amount: values.amount };
    }
};

const withAmount = withState('amount', 'setAmount', 0);
const componentDidMount = function() {
    const { web3 } = window;

    DiceContract.deployed()
        .then(instance => {
            return instance.jackpotSize();
        })
        .then(jackpotSize => {
            this.props.setAmount(web3.fromWei(jackpotSize, 'ether'));
        });
};

export default compose(
    connect(mapStateToProps),
    withAmount,
    lifecycle({ componentDidMount }),
)(JackpotAmount);
