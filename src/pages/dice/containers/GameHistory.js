/**
 * @flow
 */

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { filter, matches, slice, reverse } from 'lodash';

import GameHistory from '../components/GameHistory';

import type { OperationComponent, QueryProps } from 'react-apollo';
import type { GetHistory } from '../../../types/graphql.js.flow';

type WithDataProps = GetHistory & QueryProps;

// Limit number if results to specified number
const MAX_HISTORY_RESULTS = 20;

// Game entitiy fragment
const GAME_FRAGMENT = gql`
    fragment Game on Game {
        id
        bet {
            gambler
            amount
            mask
            modulo
            blockHash
        }
        reveal {
            reveal
        }
        payment
        jackpotPayment
    }
`;

// Query game history results
const GAME_HISTORY_QUERY = gql`
    query GetHistory {
        history {
            ...Game
        }
    }

    ${GAME_FRAGMENT}
`;

// Subscription to a new games
const GAME_SUBSCRIPTION = gql`
    subscription Game {
        game {
            ...Game
        }
    }

    ${GAME_FRAGMENT}
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

const subscribeToGames = (subscribeToMore, variables) =>
    subscribeToMore({
        document: GAME_SUBSCRIPTION,
        variables,
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
    if (loading || !filters) return { history };

    const filteredHistory = filter(history, item => {
        return matches(filters)(item.bet);
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
