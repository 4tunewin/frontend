import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';

import Dialog from './Dialog';

const LoginMetamask = () => (
    <Dialog>
        <Dialog.Header>
            <Image src="images/metamask.png" />
            Log in to MetaMask
        </Dialog.Header>

        <Dialog.Body>Please log in to MetaMask to proceed</Dialog.Body>
    </Dialog>
);

export default LoginMetamask;
