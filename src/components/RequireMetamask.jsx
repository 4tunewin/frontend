import React from 'react';
import { Message } from 'semantic-ui-react';

// Ask user to install MetaMask
export const InstallMetamask = () => (
    <Message negative>Please install MetaMask</Message>
);

// Ask user to Log in to MetaMask
export const LoginToMetamask = () => (
    <Message negative>Log in to MetaMask</Message>
);

// Ask user to change network to "MAIN NET"
export const ChangeNetwork = () => (
    <Message negative>Change network to "MAIN NET"</Message>
);
