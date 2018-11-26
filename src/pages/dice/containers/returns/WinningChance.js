/**
 * Provide winning chance based on number of
 * selected dices.
 */
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import { round } from 'lodash';

import WinningChance from '../../components/returns/WinningChance';

const mapStateToProps = state => {
    const values = getFormValues('dice')(state);
    if (values) {
        return { chance: round((values.dices.length * 100) / 6, 2) };
    }
};

export default connect(mapStateToProps)(WinningChance);
