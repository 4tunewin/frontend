import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import { getWinAmount } from '../../../lib/dice';
import BetReturns from '../components/BetReturns';

const mapStateToProps = state => {
    const values = getFormValues('dice')(state);
    if (values) {
        const winAmount = getWinAmount(values.amount, 6, values.dices.length);

        return {
            winPays: 0,
            winAmount,
        };
    }
};

export default connect(mapStateToProps)(BetReturns);
