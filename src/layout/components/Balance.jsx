/**
 * Shows ether balance of user
 */

import React from 'react';
import { round } from 'lodash';

import { Icon } from 'semantic-ui-react';

const ROUND_AMOUNT_DECIMALS = 3;

const Balance = ({ amount }) => (
    <span>
        <span>Your balance:</span>
        <span>&nbsp;</span>
        <span>
            {round(amount, ROUND_AMOUNT_DECIMALS).toFixed(
                ROUND_AMOUNT_DECIMALS,
            )}
        </span>
        <span>&nbsp;</span>
        <Icon name="ethereum" fitted />
    </span>
);

export default Balance;
