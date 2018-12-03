import { connect } from 'react-redux';
import { compose, withHandlers, mapProps } from 'recompose';
import { omit } from 'lodash';

import { filterHistory } from '../../../../actions/dice';
import GameHistoryTab from '../../components/history/GameHistoryTab';

// Provide active state which depends on presence of filters
const mapStateToProps = ({ dice }) => ({
    filtered: dice.hasIn(['filters', 'gambler']),
});

const handlers = {
    onFilter: ({ filterHistory }) => () => {
        filterHistory({ gambler: window.web3.eth.accounts[0] });
    },
    onReset: ({ filterHistory }) => () => {
        filterHistory(null);
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
)(GameHistoryTab);
