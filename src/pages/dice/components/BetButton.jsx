import React from 'react';
import { Button } from 'semantic-ui-react';

const BetButton = ({ onClick }) => (
    <Button onClick={onClick} size="huge" primary fluid>
        Place a Bet!
    </Button>
);

export default BetButton;
