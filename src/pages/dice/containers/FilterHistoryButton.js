import { connect } from 'react-redux';
import { compose, withHandlers, mapProps } from 'recompose';
import { omit } from 'lodash';

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
            filterHistory({ gambler: window.web3.eth.accounts[0] });
        }
    },
};

// Omit specified props from passing them to component
const withOmitProps = props => omit(props, ['filterHistory']);

export default compose(
    connect(
        mapStateToProps,
        { filterHistory },
    ),
    withHandlers(handlers),
    mapProps(withOmitProps),
)(FilterHistoryButton);
