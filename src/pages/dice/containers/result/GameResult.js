import React from 'react';
import {
    compose,
    lifecycle,
    branch,
    withStateHandlers,
    renderNothing,
} from 'recompose';
import { promisify } from 'bluebird';

import { withWeb3 } from '../../../../lib/web3';
import { DiceContract } from '../../../../contracts';
import GameResult from '../../components/result/GameResult';

// Store state of result
const withResult = withStateHandlers(
    { status: 'PENDING' },
    {
        setResult: ownProps => result => result,
        onClose: ownProps => () => ({
            status: 'PENDING',
        }),
    },
);

/**
 * When component is mounted, subscribe to Payment events
 */
const componentDidMount = async function() {
    const { client } = this.props.web3;
    if (!client) {
        return;
    }

    // Get latest block number
    const getBlockNumber = promisify(client.eth.getBlockNumber, {
        context: client.eth,
    });
    const latestBlock = await getBlockNumber();

    // Start watching events starting from the next block
    const contract = await DiceContract.deployed();
    const event = await contract.Payment(
        {},
        {
            fromBlock: latestBlock + 1,
            toBlock: 'latest',
        },
    );

    event.watch((error, result) => {
        if (error) {
            console.error(error);
        } else {
            // Compare bet beneficiary address with ours address
            if (result.args.beneficiary === client.eth.accounts[0]) {
                const amount = client.fromWei(result.args.amount, 'ether');
                if (amount.gt(0)) {
                    this.props.setResult({
                        status: 'WIN',
                        amount: amount,
                    });
                } else {
                    this.props.setResult({
                        status: 'LOOSE',
                    });
                }
            }
        }
    });
};

// Do not render component if status is 'PENDING'
const withHidden = branch(({ status }) => status === 'PENDING', renderNothing);

export default compose(
    withWeb3,
    withResult,
    lifecycle({ componentDidMount }),
    withHidden,
)(GameResult);
