import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';

import BetStatus from '../../components/bet/BetStatus';

// Game entitiy fragment
const GAME_STATUS = gql`
    fragment GameStatus on Game {
        id
        bet {
            transactionHash
        }
        payment
        jackpotPayment
    }
`;

// Subscription to a new games
const GAME_SUBSCRIPTION = gql`
    subscription Game {
        game {
            ...GameStatus
        }
    }

    ${GAME_STATUS}
`;

const withSubscription = graphql(GAME_SUBSCRIPTION, {
    props: ({ data: { game, loading }, ownProps }) => {
        if (loading) return;

        console.log({ game, ownProps });

        if (game.bet.transactionHash === ownProps.transactionHash) {
            console.log({ game, ownProps });
        }
    },
});

// Hide component if bet is not made yet
const hideIfNoStatus = branch(
    ({ status }) => status === 'PENDING',
    renderNothing,
);

export default compose(
    connect(({ dice }) => dice.get('bet').toJS()),
    withSubscription,
    hideIfNoStatus,
)(BetStatus);
