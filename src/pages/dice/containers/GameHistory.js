import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, lifecycle } from 'recompose';

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

const componentDidMount = function() {
    subscribeToGames(this.props.subscribeToMore);
};

export default compose(
    withData,
    lifecycle({ componentDidMount }),
)(GameHistory);
