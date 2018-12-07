import React, { Component } from 'react';
import Web3 from 'web3';
import { Loader } from 'semantic-ui-react';

const ACCESS_PENDING = 'PENDING';
const ACCESS_ALLOWED = 'ALLOWED';
const ACCESS_DENINED = 'DENINED';

class Web3Provider extends Component {
    state = {
        loading: true,
        access: ACCESS_PENDING,
        error: null,
        noWallet: false,
    };

    // Fetch all required data and start polling
    async componentWillMount() {
        try {
            // Use ETH provider if it's defined
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    // Require account access if needed
                    await window.ethereum.enable();
                    this.setState({ access: ACCESS_ALLOWED });
                } catch (error) {
                    // User denined account access
                    this.setState({ access: ACCESS_DENINED });
                }
            }
            // For old versin of wallet, get provider from injected web3 instance
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
            }
            // Otherways connect directly to network
            else {
                window.web3 = new Web3(
                    new Web3.providers.HttpProvider('http://127.0.0.1:8545'),
                );
                this.setState({ noWallet: true });
            }
        } catch (e) {
            console.error(`Error: Failed to init web3; ${e.message}`);
            this.setState({ error: e.message });
        }

        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) {
            return <Loader size="huge" active />;
        }

        return this.props.children;
    }
}

export default Web3Provider;
