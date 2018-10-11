import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { filterHistory } from '../../../actions/dice';
import FilterHistoryButton from '../components/FilterHistoryButton';

// Provide active state which depends on presence of filters
const mapStateToProps = ({ dice }) => ({
    active: dice.hasIn(['filters', 'gambler']),
});

// Handle button click and toggle state of it and filters.
const handlers = {
    onClick: ({ active, filterHistory }) => () => {
        if (active) {
            filterHistory(null);
        } else {
            const { web3 } = window;
            filterHistory({ gambler: web3.eth.accounts[0] });
        }
    },
};

export default compose(
    connect(
        mapStateToProps,
        { filterHistory },
    ),
    withHandlers(handlers),
)(FilterHistoryButton);
