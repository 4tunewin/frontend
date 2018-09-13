import { takeEvery } from 'redux-saga/effects';
import { DiceContract } from '../contracts';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 200;

export function* placeBidAsync({ type, payload }) {
    const { web3 } = window;

    const commitLastBlock = web3.eth.blockNumber + COMMIT_BLOCK_OFFSET;
    const packedCommit = '0x' + lodash.padStart((1).toString(16), 64, 0);
    const commit = web3.sha3(web3.eth.abi.encodeParameter('uint256', 1), {
        encoding: 'hex',
    });

    const packed = web3.eth.abi.encodeParameters(
        ['uint40', 'uint256'],
        [commitLastBlock, commit],
    );

    const hash = web3.sha3(packed, {
        encoding: 'hex',
    });

    const commitSignature = web3.eth.sign(secretSigner, hash);

    const r = '0x' + commitSignature.substr(2, 64);
    const s = '0x' + commitSignature.substr(66, 64);
    const v = parseInt(commitSignature.substr(130, 2)) + 27;

    // Send some ether to the contract
    // await diceInstance.send(web3.toWei(3, 'ether'), { from: owner });

    // await diceInstance
    //     .placeBet(1, 6, commitLastBlock, commit, v, r, s, {
    //         from: gambler,
    //         value: web3.toWei(0.1, 'ether'),
    //     });
}

export function* watchPlaceBidAsync() {
    yield takeEvery('DICE.PLACE_BID_ASYNC', placeBidAsync);
}
