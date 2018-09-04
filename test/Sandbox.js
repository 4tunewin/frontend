const Sandbox = artifacts.require('./Sandbox.sol');
const lodash = require('lodash');

contract('Sandbox', accounts => {
    const signer = accounts[0];

    let sandboxInstance;
    before(async () => {
        sandboxInstance = await Sandbox.deployed();
    });

    // it('pack value', async () => {
    //     const val1 = 1;
    //     const val2 = 2;
    //     const packed = [
    //         '0x',
    //         lodash.padStart(val1.toString(16), 64, 0),
    //         lodash.padStart(val2.toString(16), 64, 0),
    //     ].join('');

    //     const result = await sandboxInstance.getPackedData(val1, val2);
    //     assert.equal(packed, result, 'packed data should match');
    // });

    // it('hash value', async () => {
    //     const val1 = 1;
    //     const val2 = 2;
    //     const packed = [
    //         '0x',
    //         lodash.padStart(val1.toString(16), 64, 0),
    //         lodash.padStart(val2.toString(16), 64, 0),
    //     ].join('');
    //     const hash = web3.sha3(packed, {
    //         encoding: 'hex',
    //     });

    //     const result = await sandboxInstance.getHash(val1, val2);
    //     assert.equal(hash, result, 'hash should match');
    // });

    // it('verifies signature', async () => {
    //     const val1 = 1;
    //     const val2 = 2;
    //     const packed = [
    //         '0x',
    //         lodash.padStart(val1.toString(16), 64, 0),
    //         lodash.padStart(val2.toString(16), 64, 0),
    //     ].join('');

    //     const hash = web3.sha3(packed, {
    //         encoding: 'hex',
    //     });

    //     const signature = web3.eth.sign(signer, hash);
    //     const r = '0x' + signature.substr(2, 64);
    //     const s = '0x' + signature.substr(66, 64);
    //     const v = parseInt(signature.substr(130, 2)) + 27;

    //     await sandboxInstance.verify(val1, val2, v, r, s).then(result => {
    //         console.log(result);
    //         assert.equal(result, signer);
    //     });
    // });

    it('set bet / get bet', async () => {
        const commit = 10;
        const hash = web3.sha3(
            '0x' + lodash.padStart(commit.toString(16), 64, 0),
            {
                encoding: 'hex',
            },
        );

        await sandboxInstance.setBet(hash);
        const bet = await sandboxInstance.getBet(commit);

        assert.equal(bet.toNumber(), 1);
    });
});
