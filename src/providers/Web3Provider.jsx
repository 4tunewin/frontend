import { Component } from 'react';
import { connect } from 'react-redux';

import { saveAccounts, saveNetwork } from '../actions/user';

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;

class Web3Provider extends Component {
    // Fetch all required data and start polling
    componentDidMount() {
        this._fetchAccounts();
        this._fetchNetwork();

        this._initAccountsPoll();
        this._initNetworkPoll();
    }

    // Fetch current accounts from web3 provider
    _fetchAccounts = () => {
        const { web3 } = window;

        if (web3 && web3.eth) {
            web3.eth.getAccounts((error, accounts) => {
                if (error) {
                    console.error(error);
                } else {
                    this.props.saveAccounts(accounts);
                }
            });
        }
    };

    // Fetch current network id from web3 provider
    _fetchNetwork = () => {
        const { web3 } = window;

        if (web3 && web3.version) {
            web3.version.getNetwork((error, network) => {
                if (error) {
                    console.error(error);
                } else {
                    this.props.saveNetwork(network);
                }
            });
        }
    };

    // Init accounts polling
    _initAccountsPoll = () => {
        if (!this.accountsInterval) {
            this.accountsInterval = setInterval(
                this._fetchAccounts,
                ONE_SECOND,
            );
        }
    };

    // Init network polling
    _initNetworkPoll = () => {
        if (!this.networkInterval) {
            this.networkInterval = setInterval(this._fetchNetwork, ONE_MINUTE);
        }
    };

    render() {
        return this.props.children;
    }
}

export default connect(
    null,
    { saveAccounts, saveNetwork },
)(Web3Provider);
