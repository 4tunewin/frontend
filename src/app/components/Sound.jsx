/**
 * Shows ether balance of user
 */

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Icon, Popup } from 'semantic-ui-react';

import { withSound } from '../../providers/SoundProvider';

const ROUND_AMOUNT_DECIMALS = 3;

const Wrapper = styled.div`
    color: #ffffff;
    font-size: 14px;
    opacity: 0.5;
    cursor: pointer;

    transition: opacity 0.6s;
    &:hover {
        opacity: 1;
    }
`;

const SoundIcon = styled(Icon)`
    vertical-align: middle;
    font-size: 20px !important;
    margin-right: 0px !important;
`;

const Trigger = ({ mute, ...props }) => (
    <Wrapper {...props}>
        <SoundIcon name={`volume ${mute ? 'off' : 'up'}`} />
    </Wrapper>
);

const Sound = ({ mute, toggleSound }) => (
    <Popup
        trigger={<Trigger mute={mute} onClick={toggleSound} />}
        small
        inverted
    >
        {mute ? (
            <FormattedMessage
                id="app.Sound.popup.content.on"
                defaultMessage="Unmute sound"
            />
        ) : (
            <FormattedMessage
                id="app.Sound.popup.content.off"
                defaultMessage="Mute sound"
            />
        )}
    </Popup>
);

export default withSound(Sound);
