import React, { Component } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import { Loader, Dimmer } from 'semantic-ui-react';

import { InstallMetamask, ChangeNetwork } from '../common/components/metamask';
import config from '../config';

const ACCESS_PENDING = 'PENDING';
const ACCESS_ALLOWED = 'ALLOWED';
const ACCESS_DENINED = 'DENINED';

// Update network once a second
const UPDATE_NETWORK_INTERVAL = 1000;

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
                    new Web3.providers.HttpProvider(config.network.uri),
                );
                this.setState({ noWallet: true });
            }
        } catch (e) {
            console.error(`Error: Failed to init web3; ${e.message}`);
            this.setState({ error: e.message });
        }

        // Update network
        const network = await window.web3.version.getNetwork();
        this.setState({ network });

        this.setState({ loading: false });
    }

    renderDialog = () => {
        // return <ChangeNetwork />;
        // return <InstallMetamask />;
        if (this.state.noWallet) {
            return <InstallMetamask />;
        }

        // const matchNetwork =
        //     config.network.id === '*' ||
        //     parseInt(this.state.network, 10) === config.network.id;

        // if (!matchNetwork) {
        //     return <ChangeNetwork />;
        // }

        return null;
    };

    render() {
        const { loading, access, error, noWallet } = this.state;

        if (loading) {
            return <Loader size="huge" active />;
        }

        const component = this.renderDialog();
        const active = component !== null;

        console.log({ component, active });

        return (
            <Dimmer.Dimmable dimmed={active} blurring page>
                {active && (
                    <Dimmer page active>
                        {component}
                    </Dimmer>
                )}

                {this.props.children}
            </Dimmer.Dimmable>
        );
    }
}

export default Web3Provider;
