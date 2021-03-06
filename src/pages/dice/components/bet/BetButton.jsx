import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
import { FormattedMessage } from 'react-intl';
import { Button } from 'semantic-ui-react';

import { withSound } from '../../../../providers/SoundProvider';

const StyledButton = styled(Button)`
    font-family: 'Proxima Nova Semibold';
    background: transparent !important;
    background-image: linear-gradient(
        125deg,
        rgb(213, 61, 205) 0%,
        rgb(128, 102, 255) 100%
    ) !important;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.22) !important;
    color: rgba(255, 255, 255, 0.9) !important;
    text-transform: uppercase !important;
    border-radius: 30px !important;
    text-transform: uppercase;
`;

const BetButton = ({ onClick }) => (
    <StyledButton
        onClick={onClick}
        type="button"
        size="huge"
        animated="vertical"
        fluid
    >
        <Button.Content visible>
            <FormattedMessage
                id="pages.dice.bet.BetButton.default"
                defaultMessage="Make a bet"
            />
        </Button.Content>
        <Button.Content hidden>
            <FormattedMessage
                id="pages.dice.bet.BetButton.active"
                defaultMessage="Good luck!"
            />
        </Button.Content>
    </StyledButton>
);

const withClickAction = withHandlers({
    onClick: ownProps => () => {
        ownProps.playSound('/sounds/press.mp3');
        ownProps.onClick();
    },
});

export default compose(
    withSound,
    withClickAction,
)(BetButton);
