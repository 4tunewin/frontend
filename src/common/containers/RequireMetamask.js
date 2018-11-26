/**
 * Verify that all conditionals required for MetaMask are passed
 * to render children component, OR show error message.
 */

import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { isNil, isEmpty } from 'lodash';

import config from '../../config';

import {
    InstallMetamask,
    LoginToMetamask,
    ChangeNetwork,
} from '../components/RequireMetamask';

// Verify if MetaMask is installed and web3 in embeded
const installMetamask = branch(
    () => isNil(window.web3),
    renderComponent(InstallMetamask),
);

// Verify if user has logged in to MetaMask and accounts are available
const loginMetamask = branch(
    ({ user }) => isEmpty(user.get('accounts')),
    renderComponent(LoginToMetamask),
);

// Verify web3 network and ask user to change it if it's not MAIN NET
const changeNetwork = branch(({ user }) => {
    return !(
        config.network === '*' ||
        parseInt(user.get('network'), 10) === config.network
    );
}, renderComponent(ChangeNetwork));

// Component to render if all verifications were passed
const component = ({ children }) => children;

export default compose(
    connect(({ user }) => ({ user })),
    installMetamask,
    loginMetamask,
    changeNetwork,
)(component);
