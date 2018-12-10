/**
 * Shows ether balance of user
 */

import React from 'react';
import styled from 'styled-components';
import { round } from 'lodash';
import { FormattedMessage } from 'react-intl';
import { Icon, Popup } from 'semantic-ui-react';

const ROUND_AMOUNT_DECIMALS = 3;

const Wrapper = styled.div`
    color: #ffffff;
    font-size: 14px;
    opacity: 0.5;

    transition: opacity 0.6s;
    &:hover {
        opacity: 1;
    }
`;

const EtherIcon = styled(Icon)`
    vertical-align: middle;
    font-size: 20px !important;
    margin-right: 0px !important;
`;

const Trigger = ({ amount, ...props }) => (
    <Wrapper {...props}>
        <EtherIcon name="ethereum" />
        <span>
            {round(amount, ROUND_AMOUNT_DECIMALS).toFixed(
                ROUND_AMOUNT_DECIMALS,
            )}
        </span>
    </Wrapper>
);

const Balance = ({ amount }) => (
    <Popup trigger={<Trigger amount={amount} />} small inverted>
        <FormattedMessage
            id="layout.Balance.popup.content"
            defaultMessage="Your balance"
        />
    </Popup>
);

export default Balance;
