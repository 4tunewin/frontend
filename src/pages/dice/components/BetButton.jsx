import React from 'react';
import { Button } from 'semantic-ui-react';

import { RequireMetamask } from '../../../containers';

const BetButton = ({ onClick }) => (
    <RequireMetamask>
        <Button onClick={onClick} size="huge" primary fluid>
            Place a Bet!
        </Button>
    </RequireMetamask>
);

export default BetButton;
