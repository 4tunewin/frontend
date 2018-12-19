import { takeEvery, call, put } from 'redux-saga/effects';
import gql from 'graphql-tag';

import { client } from '../providers/ApolloProvider';
import { DiceContract } from '../contracts';
import { placeBetStart, placeBetSuccess, placeBetFail } from '../actions/dice';
import { setBitsForIndexes } from '../lib/dice';

/**
 * Send a new bet to smart contract
 */
export function* placeBetAsync({ web3, type, payload }) {
    yield put(placeBetStart(payload));

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

    const { data } = yield call(client.mutate, {
        mutation,
        variables: {
            input: { address: web3.eth.accounts[0], network: 1 },
        },
    });

    const { commit, commitLastBlock, signature } = data.signBet;

    const diceInstance = yield call(DiceContract.deployed);

    try {
        console.log(payload);
        const result = yield diceInstance.placeBet(
            setBitsForIndexes(payload.dices),
            payload.modulo,
            commitLastBlock,
            commit,
            signature.v,
            signature.r,
            signature.s,
            {
                from: web3.eth.accounts[0],
                value: web3.toWei(payload.amount, 'ether'),
            },
        );

        console.log(result);

        yield put(placeBetSuccess(result.receipt.transactionHash));
    } catch (e) {
        console.log(e);
        yield put(placeBetFail(e.message));
    }
}

export function* watchPlaceBetAsync() {
    yield takeEvery('DICE.PLACE_BET_ASYNC', placeBetAsync);
}
