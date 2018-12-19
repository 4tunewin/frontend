import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, branch, renderNothing, lifecycle } from 'recompose';
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

const subscribeToGames = (subscribeToMore, ownProps) =>
    subscribeToMore({
        document: GAME_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return;

            if (
                subscriptionData.bet.transactionHash ===
                ownProps.transactionHash
            ) {
                console.log({ subscriptionData, ownProps });
            }
        },
    });

/**
 * Subscribe to new games on component mount
 */
const componentDidMount = function() {
    subscribeToGames(this.props.subscribeToMore, this.props);
};

// Hide component if bet is not made yet
const hideIfNoStatus = branch(
    ({ status }) => status === 'PENDING',
    renderNothing,
);

export default compose(
    connect(({ dice }) => dice.get('bet').toJS()),
    hideIfNoStatus,
    lifecycle({ componentDidMount }),
)(BetStatus);
