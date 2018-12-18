import { compose, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';

import BetStatus from '../../components/bet/BetStatus';

// Hide component if bet is not made yet
const hideIfNoStatus = branch(
    ({ status }) => status === 'PENDING',
    renderNothing,
);

export default compose(
    connect(({ dice }) => dice.get('bet').toJS()),
    hideIfNoStatus,
)(BetStatus);
