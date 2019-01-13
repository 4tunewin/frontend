import React, { Fragment } from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { Loader, Dimmer } from 'semantic-ui-react';

import { withWeb3 } from '../../../lib/web3';
import InstallMetamask from './InstallMetamask';
import ChangeNetwork from './ChangeNetwork';

import config from '../../../config';

/**
 * Return dialog that depends on current wallet state
 */
const renderDialog = ({ client, access, network, account }) => {
    let component = null;

    // MetaMask wallet is not installed
    if (!client) {
        component = <InstallMetamask />;
    } else {
        // Match current network with required
        const matchNetwork =
            config.network.id === '*' ||
            parseInt(network, 10) === config.network.id;

        if (!matchNetwork) {
            component = <ChangeNetwork />;
        }
    }

    if (!component) {
        return null;
    }

    return (
        <Dimmer page active>
            {component}
        </Dimmer>
    );
};

// Show spinner while loading web3
const withSpinner = branch(
    ({ web3 }) => web3.loading,
    renderComponent(() => <Loader size="huge" active />),
);

const Metamask = ({ web3, children }) => (
    <Fragment>
        {renderDialog(web3)}
        {children};
    </Fragment>
);

export default compose(
    withWeb3,
    withSpinner,
)(Metamask);
