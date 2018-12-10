import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';

import Dialog from './Dialog';

const ChangeNetwork = () => (
    <Dialog>
        <Dialog.Header>
            <Image src="images/metamask.png" />
            Switch to Mainnet
        </Dialog.Header>

        <Dialog.Body>
            Our games are available on mainnet only – please switch via Metamask
        </Dialog.Body>
    </Dialog>
);

export default ChangeNetwork;
