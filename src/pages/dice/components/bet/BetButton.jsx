import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledButton = styled(Button)`
    background: transparent;
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
    <StyledButton onClick={onClick} size="huge" fluid>
        Make a bet
    </StyledButton>
);

export default BetButton;
