import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';

import { SimpleDialog } from '../../../common';

const StyledButton = styled(Button)`
    background: rgb(162, 86, 235) !important;
    color: #ffffff !important;
`;

const InstallMetamask = () => (
    <SimpleDialog>
        <SimpleDialog.Header>
            <Image src="images/metamask.png" />
            MetaMask is Required
        </SimpleDialog.Header>

        <SimpleDialog.Body>
            To start using our games, please consider installing MetaMask
            wallet. <br />
            To do that, click the button below and follow the instruction.
        </SimpleDialog.Body>

        <SimpleDialog.Footer>
            <StyledButton
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                target="_blank"
                link
            >
                Get MetaMask
            </StyledButton>
        </SimpleDialog.Footer>
    </SimpleDialog>
);

export default InstallMetamask;
