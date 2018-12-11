import { connect } from 'react-redux';
import { compose, withHandlers, mapProps } from 'recompose';
import { injectIntl } from 'react-intl';
import { omit } from 'lodash';

import { withWeb3 } from '../../../../lib/web3';
import { filterHistory } from '../../../../actions/dice';
import GameHistoryTab from '../../components/history/GameHistoryTab';

// Provide active state which depends on presence of filters
const mapStateToProps = ({ dice }) => ({
    filtered: dice.hasIn(['filters', 'gambler']),
});

const handlers = {
    onFilter: ({ web3, filterHistory }) => () => {
        filterHistory({ gambler: web3.client.eth.accounts[0] });
    },
    onReset: ({ filterHistory }) => () => {
        filterHistory(null);
    },
};

// Omit specified props from passing them to component
const withOmitProps = props => omit(props, ['filterHistory']);

export default compose(
    withWeb3,
    injectIntl,
    connect(
        mapStateToProps,
        { filterHistory },
    ),
    withHandlers(handlers),
    mapProps(withOmitProps),
)(GameHistoryTab);
