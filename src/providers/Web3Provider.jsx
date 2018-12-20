import React, { Component } from 'react';
import { each } from 'lodash';
import Web3 from 'web3';

import * as contracts from '../contracts';
// import DiceContract from '../contracts/Dice';

export const ACCESS_PENDING = 'PENDING';
export const ACCESS_ALLOWED = 'ALLOWED';
export const ACCESS_DENINED = 'DENINED';

const { Provider, Consumer } = React.createContext();

const getContractInstance = (contract, client) => {
    return async () => {
        const instance = await contract.deployed();
        return new client.eth.Contract(instance.abi, instance.address);
    };
};

class Web3Provider extends Component {
    state = {
        client: null,
        loading: true,
        access: ACCESS_PENDING,
        account: null,
        error: null,
    };

    // Fetch all required data and start polling
    async componentWillMount() {
        let client = null;
        let access = null;

        try {
            // Use ETH provider if it's defined
            if (window.ethereum) {
                client = new Web3(window.ethereum);
                try {
                    // Require account access if needed
                    await window.ethereum.enable();
                    access = ACCESS_ALLOWED;
                } catch (error) {
                    // User denined account access
                    access = ACCESS_DENINED;
                }
            }
            // For old versin of wallet, get provider from injected web3 instance
            else if (window.web3) {
                client = new Web3(window.web3.currentProvider);
            }
        } catch (e) {
            console.error(`Error: Failed to init web3; ${e.message}`);
            this.setState({ error: e.message });
        }

        // Fetch current network
        if (client) {
            each(contracts, contract => {
                contract.setProvider(client.currentProvider);
                contract.instance = getContractInstance(contract, client);
            });

            const network = await client.eth.net.getId();
            const accounts = await client.eth.getAccounts();

            this.setState({
                client,
                network,
                access,
                account: accounts[0],
                loading: false,
            });
        } else {
            this.setState({ loading: false });
        }
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}

export { Web3Provider, Consumer as Web3Consumer };
