import React from 'react';
import { Dimmer } from 'semantic-ui-react';

import { SimpleDialog } from '../../../../common';

const BetStatusStart = () => (
    <SimpleDialog.Body>CONFIRM YOUR BET</SimpleDialog.Body>
);

const BetStatusSuccess = ({ modulo, dices, amount }) => (
    <SimpleDialog.Body>YOUR BET IS PLACED: {modulo}</SimpleDialog.Body>
);

const BetStatusFailed = ({ error }) => (
    <SimpleDialog.Body>{error}</SimpleDialog.Body>
);

const BetStatusContent = ({ status, ...props }) => {
    let Component = null;
    switch (status) {
        case 'START':
            Component = BetStatusStart;
            break;
        case 'SUCCESS':
            Component = BetStatusSuccess;
            break;
        case 'FAIL':
            Component = BetStatusFailed;
            break;
    }

    return <Component {...props} />;
};

const BetStatus = ({ status, ...props }) => {
    return (
        <Dimmer page active>
            <SimpleDialog>
                <BetStatusContent status={status} {...props} />
            </SimpleDialog>
        </Dimmer>
    );
};

export default BetStatus;
