import React from 'react';
import styled from 'styled-components';
import { Button, Image, Header, Dimmer } from 'semantic-ui-react';

import { SimpleDialog } from '../../../../common';

const Dialog = styled(SimpleDialog)`
    text-align: center;
`;

const Logo = styled(Image)`
    display: inline-block !important;
`;

const StyledButton = styled(Button)`
    background: rgb(162, 86, 235) !important;
    color: #ffffff !important;
`;

const StyledHeader = styled(Header)`
    font-family: 'Proxima Nova Semibold';
    color: #ffffff !important;
    text-align: center;
`;

const StyledBody = styled(SimpleDialog.Body)`
    margin-top: 30px;
`;

const StyledFooter = styled(SimpleDialog.Footer)`
    margin-top: 30px;
    text-align: center;
`;

const GameResult = ({ status, onClose }) => (
    <Dimmer page active>
        <Dialog>
            <Logo src="images/logo.png" size="small" />

            <StyledBody>
                {status === 'WIN' ? (
                    <StyledHeader as="h2">Your bet win!</StyledHeader>
                ) : (
                    <StyledHeader as="h2">Your bet loose :(</StyledHeader>
                )}
            </StyledBody>

            <StyledFooter>
                <StyledButton onClick={onClose} size="large" fluid>
                    Play again
                </StyledButton>
            </StyledFooter>
        </Dialog>
    </Dimmer>
);

export default GameResult;
