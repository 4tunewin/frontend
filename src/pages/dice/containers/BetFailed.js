import { connect } from 'react-redux';
import { compose, branch, renderNothing } from 'recompose';
import { isNil } from 'lodash';

import BetFailed from '../components/BetFailed';

// Provide error state
const mapStateToProps = ({ dice }) => ({ error: dice.get('error') });

// Hide this component if there is no error
const hideIfNoError = branch(({ error }) => isNil(error), renderNothing);

export default compose(
    connect(mapStateToProps),
    hideIfNoError,
)(BetFailed);
