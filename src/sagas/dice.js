import { takeEvery, call, put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import gql from 'graphql-tag';
import { toString } from 'lodash';

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
        mutation signBet {
            signBet {
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

    const { data } = yield call(client.mutate, { mutation });
    const { commit, commitLastBlock, signature, gasPrice } = data.signBet;

    const diceInstance = yield call(DiceContract.instance);

    console.info('Placing bet', {
        commit,
        commitLastBlock,
        gasPrice,
        signature: {
            v: signature.v,
            r: signature.r,
            s: signature.s,
        },
    });

    const event = yield call(
        diceInstance.methods.placeBet,
        setBitsForIndexes(payload.dices),
        payload.modulo,
        commitLastBlock,
        commit,
        signature.v,
        signature.r,
        signature.s,
    );

    const channel = eventChannel(emitter => {
        event
            .send({
                from: web3.account,
                value: web3.client.utils.toWei(
                    toString(payload.amount),
                    'ether',
                ),
                gas: 200000,
                gasPrice,
            })
            .on('transactionHash', hash => emitter(hash))
            .on('error', error => {
                console.log(`Failed to place bet; ${error.message}`);
                // WEB3 does not allow us to catch exception thrown by RPC because of
                // implementation of web3 PromiEvent.
                emitter(new Error(error));
            });

        return () => {};
    });

    try {
        const transactionHash = yield take(channel);
        yield put(placeBetSuccess(transactionHash));
    } catch (e) {
        yield put(placeBetFail(e));
    }
}

export function* watchPlaceBetAsync() {
    yield takeEvery('DICE.PLACE_BET_ASYNC', placeBetAsync);
}
