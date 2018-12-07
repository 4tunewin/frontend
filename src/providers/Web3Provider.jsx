import React, { Component } from 'react';
import styled from 'styled-components';
import Web3 from 'web3';
import {
    Loader,
    Dimmer,
    Segment,
    Image,
    Header,
    Button,
} from 'semantic-ui-react';

import config from '../config';

const ACCESS_PENDING = 'PENDING';
const ACCESS_ALLOWED = 'ALLOWED';
const ACCESS_DENINED = 'DENINED';

const Dialog = styled(Segment)`
    border-radius: 10px !important;
    background: #27304d !important;
    padding: 30px !important;
    opacity: 0.8;
`;

const StyledHeader = styled(Header)`
    font-family: 'Proxima Nova Semibold';
    color: #ffffff !important;
`;

const Text = styled.div`
    margin: 22px 0px 22px 0px;
    line-height: 20px;
`;

const StyledButton = styled(Button)`
    background: rgb(162, 86, 235) !important;
    color: #ffffff !important;
`;

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

        this.setState({ loading: false });
    }

    renderDialog = () => {
        return (
            <Dialog>
                <StyledHeader>
                    <Image src="images/metamask.png" />
                    MetaMask is Required
                </StyledHeader>

                <Text>
                    To start using our games, please consider installing
                    MetaMask wallet. <br />
                    To do that, click the button below and follow the
                    instruction.
                </Text>

                <StyledButton
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                    target="_blank"
                    link
                >
                    Get MetaMask
                </StyledButton>
            </Dialog>
        );
    };

    render() {
        const { loading, access, error, noWallet } = this.state;

        if (loading) {
            return <Loader size="huge" active />;
        }

        // const active = access === ACCESS_DENINED || error !== null || noWallet;
        const active = true;

        return (
            <Dimmer.Dimmable dimmed={active} blurring page>
                {active && <Dimmer active>{this.renderDialog()}</Dimmer>}

                {this.props.children}
            </Dimmer.Dimmable>
        );
    }
}

export default Web3Provider;
