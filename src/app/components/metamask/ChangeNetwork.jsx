import React from 'react';
import { Image } from 'semantic-ui-react';

import { SimpleDialog } from '../../../common';

const ChangeNetwork = () => (
    <SimpleDialog>
        <SimpleDialog.Header>
            <Image src="images/metamask.png" />
            Switch to Mainnet
        </SimpleDialog.Header>

        <SimpleDialog.Body>
            Our games are available on mainnet only – please switch via Metamask
        </SimpleDialog.Body>
    </SimpleDialog>
);

export default ChangeNetwork;
