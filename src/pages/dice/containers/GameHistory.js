import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { filter, matches } from 'lodash';

import GameHistory from '../components/GameHistory';

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
    query getHistory {
        history {
            ...Game
        }
    }

    ${GAME_FRAGMENT}
`;

// Subscription to a new games
const GAME_SUBSCRIPTION = gql`
    subscription game {
        game {
            ...Game
        }
    }

    ${GAME_FRAGMENT}
`;

const withData = graphql(GAME_HISTORY_QUERY, {
    props: ({ data: { history, loading, subscribeToMore } }) => ({
        loading,
        history,
        subscribeToMore,
    }),
});

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
 * Filter game history on provided filters
 */
const withFilters = withProps(({ loading, history, filters }) => {
    if (loading || !filters) return { history };

    const filteredHistory = filter(history, item => {
        return matches(filters)(item.bet);
    });

    return { history: filteredHistory };
});

const mapStateToProps = ({ dice }) => {
    const filters = dice.get('filters');
    return { filters: filters ? filters.toJS() : {} };
};

export default compose(
    withData,
    lifecycle({ componentDidMount }),
    connect(mapStateToProps),
    withFilters,
)(GameHistory);
