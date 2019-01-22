import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, branch, renderNothing } from 'recompose';
import { connect } from 'react-redux';

import { betResult, betReset } from '../../../../actions/dice';
import { computeOutcome } from '../../../../lib/dice';
import BetStatus from '../../components/bet/BetStatus';

// Game entitiy fragment
const GAME_STATUS = gql`
    fragment GameStatus on Game {
        id
        bet {
            modulo
            mask
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
        if (loading || !game) return;

        // Update result for current bet
        if (game.bet.transactionHash === ownProps.transactionHash) {
            let soundFile;
            if (game.status === 'FAIL') {
                ownProps.betResult({ status: 'FAIL' });
            } else {
                // Calculate game outcome
                const outcome = computeOutcome({
                    modulo: game.bet.modulo,
                    betMask: game.bet.mask,
                    betBlockHash: game.bet.blockHash,
                    secret: game.reveal.secret,
                });

                ownProps.betResult({
                    status: 'SUCCESS',
                    win: outcome.win,
                    jackpot: outcome.jackpot,
                    payment: window.web3.fromWei(game.payment, 'ether'),
                    jackpotPayment: window.web3.fromWei(
                        game.jackpoPayment,
                        'ether',
                    ),
                });
            }

            // sound.once('load', sound.play);
        }
    },
});

// Hide component if bet is not made yet
const hideIfNoStatus = branch(
    ({ status }) => status === 'PENDING',
    renderNothing,
);

export default compose(
    connect(
        ({ dice }) => dice.get('bet').toJS(),
        { betResult, onClose: betReset },
    ),
    withSubscription,
    hideIfNoStatus,
)(BetStatus);
