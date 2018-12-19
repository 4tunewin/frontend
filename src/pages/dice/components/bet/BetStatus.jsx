import React from 'react';
import { Dimmer } from 'semantic-ui-react';

import { SimpleDialog } from '../../../../common';

const BetStatusStart = () => (
    <SimpleDialog.Body>CONFIRM YOUR BET</SimpleDialog.Body>
);

const BetStatusSuccess = ({ modulo, dices, amount }) => (
    <SimpleDialog.Body>YOUR BET IS PLACED: {modulo}</SimpleDialog.Body>
);

const BetStatusFailed = ({ message }) => (
    <SimpleDialog.Body>{message}</SimpleDialog.Body>
);

const BetStatusWin = () => <SimpleDialog.Body>WIN</SimpleDialog.Body>;

const BetStatusLoose = () => <SimpleDialog.Body>LOOSE</SimpleDialog.Body>;

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
        case 'WIN':
            Component = BetStatusWin;
            break;
        case 'LOOSE':
            Component = BetStatusLoose;
            break;
        default:
            return null;
    }

    return <Component {...props} />;
};

const BetStatus = ({ status, ...props }) => (
    <Dimmer page active>
        <SimpleDialog>
            <BetStatusContent status={status} {...props} />
        </SimpleDialog>
    </Dimmer>
);

export default BetStatus;
