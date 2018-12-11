import React from 'react';

import { Web3Consumer } from '../providers';

/**
 * Provide web3 object with props to specified component
 */
export const withWeb3 = Component => props => (
    <Web3Consumer>{web3 => <Component {...props} web3={web3} />}</Web3Consumer>
);
