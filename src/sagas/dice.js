import { takeEvery, call } from 'redux-saga/effects';
import { padStart } from 'lodash';
import { promisify } from 'bluebird';

import { DiceContract } from '../contracts';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 200;

export function* placeBidAsync({ type, payload }) {
    const { web3 } = window;

    const getBlockNumber = promisify(web3.eth.getBlockNumber);
    const sign = promisify(web3.eth.sign);

    const blockNumber = yield call(getBlockNumber);

    const commitLastBlock = blockNumber + COMMIT_BLOCK_OFFSET;
    const packedCommit = '0x' + padStart((1).toString(16), 64, 0);
    const commit = web3.sha3(packedCommit, {
        encoding: 'hex',
    });

    const packed = [
        '0x',
        padStart(commitLastBlock.toString(16), 10, 0),
        commit.substr(2),
    ].join('');

    const hash = web3.sha3(packed, {
        encoding: 'hex',
    });

    const commitSignature = yield call(sign, web3.eth.accounts[0], hash);

    const r = '0x' + commitSignature.substr(2, 64);
    const s = '0x' + commitSignature.substr(66, 64);
    const v = parseInt(commitSignature.substr(130, 2), 10) + 27;

    // console.log({ r, s, v });

    const diceInstance = yield call(DiceContract.deployed);
    yield diceInstance.placeBet(1, 6, commitLastBlock, commit, v, r, s, {
        from: web3.eth.accounts[0],
        value: web3.toWei(0.1, 'ether'),
    });

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
