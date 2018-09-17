import { takeEvery, call } from 'redux-saga/effects';
import gql from 'graphql-tag';
import { padStart } from 'lodash';
import { promisify } from 'bluebird';

import { client } from '../providers/ApolloProvider';
import { DiceContract } from '../contracts';
import config from '../config';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 200;

export function* placeBidAsync({ type, payload }) {
    const { web3 } = window;

    // Get signature for a new bet
    const mutation = gql`
        mutation signBet($input: SignBetInput!) {
            signBet(input: $input) {
                commit
                commitLastBlock
                signature {
                    r
                    s
                    v
                }
                gasPrice
            }
        }
    `;

    const signature = yield call(client.mutate, {
        mutation,
        variables: {
            input: { address: web3.eth.accounts[0], network: 1 },
        },
    });
    console.log(signature);

    console.log(
        1,
        6,
        signature.data.signBet.commitLastBlock,
        signature.data.signBet.commit,
        signature.data.signBet.signature.v,
        signature.data.signBet.signature.r,
        signature.data.signBet.signature.s,
    );

    const diceInstance = yield call(DiceContract.deployed);
    yield diceInstance.placeBet(
        1,
        6,
        signature.data.signBet.commitLastBlock,
        signature.data.signBet.commit,
        signature.data.signBet.signature.v,
        signature.data.signBet.signature.r,
        signature.data.signBet.signature.s,
        {
            from: web3.eth.accounts[0],
            value: web3.toWei(0.1, 'ether'),
        },
    );

    // yield DiceContract.deployed().then(instance => {
    //     return instance.placeBet(1, 6, commitLastBlock, commit, v, r, s, {
    //         from: web3.eth.accounts[0],
    //         value: web3.toWei(0.1, 'ether'),
    //     });
    // });
}

export function* watchPlaceBidAsync() {
    yield takeEvery('DICE.PLACE_BID_ASYNC', placeBidAsync);
}
