/**
 * @flow
 */

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { filter, matches, slice, toUpper } from 'lodash';

import GameHistory from '../../components/history/GameHistory';

import type { OperationComponent, QueryProps } from 'react-apollo';
import type { GetHistory } from '../../../../types/graphql.js.flow';

type WithDataProps = GetHistory & QueryProps;

// Limit number if results to specified number
const MAX_HISTORY_RESULTS = 100;

// Game entitiy fragment
const GAME_HISTORY_FRAGMENT = gql`
    fragment GameHistory on Game {
        id
        bet {
            gambler
            amount
            mask
            modulo
            commit
            blockNumber
            blockHash
            transactionHash
        }
        reveal {
            secret
        }
        payment
        jackpotPayment
        status
    }
`;

// Query game history results
const GAME_HISTORY_QUERY = gql`
    query GetHistory {
        history {
            ...GameHistory
        }
    }

    ${GAME_HISTORY_FRAGMENT}
`;

// Subscription to a new games
const GAME_SUBSCRIPTION = gql`
    subscription Game {
        game {
            ...GameHistory
        }
    }

    ${GAME_HISTORY_FRAGMENT}
`;

const withData: OperationComponent<GetHistory, {}, WithDataProps> = graphql(
    GAME_HISTORY_QUERY,
    {
        props: ({ data: { history, loading, subscribeToMore } }) => ({
            loading,
            history,
            subscribeToMore,
        }),
    },
);

const subscribeToGames = subscribeToMore =>
    subscribeToMore({
        document: GAME_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return;

            return Object.assign({}, prev, {
                history: [subscriptionData.data.game, ...prev.history],
            });
        },
    });

/**
 * Subscribe to new games on component mount
 */
const componentDidMount = function() {
    subscribeToGames(this.props.subscribeToMore);
};

/**
 * Provide filters defined for game history
 */
const mapStateToProps = ({ dice }) => {
    const filters = dice.get('filters');
    return { filters: filters ? filters.toJS() : {} };
};

/**
 * Filter game history on provided filters
 */
const withFilters = withProps(({ loading, history, filters }) => {
    if (loading) return;

    const filteredHistory = filter(history, item => {
        return matches({ ...(filters || {}), status: 'SUCCESS' })({
            gambler: toUpper(item.bet.gambler),
            status: item.status,
        });
    });

    return { history: filteredHistory };
});

/**
 * Limit number of history results
 */
const withLimit = withProps(({ history }) => ({
    history: slice(history, 0, MAX_HISTORY_RESULTS),
}));

export default compose(
    withData,
    lifecycle({ componentDidMount }),
    connect(mapStateToProps),
    withFilters,
    withLimit,
)(GameHistory);
