import React from 'react';
import { truncate } from 'lodash';

import config from '../../config';

/**
 * Represents link to explorer with specified address
 */
const ExplorerLink = ({ address, length, omission }) => (
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${config.explorerUrl}/address/${address}`}
    >
        {length ? truncate(address, { length, omission }) : address}
    </a>
);

ExplorerLink.defaultProps = {
    omission: '',
};

export default ExplorerLink;
