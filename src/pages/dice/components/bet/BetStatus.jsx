import React from 'react';
import styled from 'styled-components';
import { Dimmer, Loader, Button } from 'semantic-ui-react';

import { SimpleDialog, Dice } from '../../../../common';

const Title = styled.div`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: 15px;
`;

const StyledLoader = styled(Loader)`
    margin-top: 25px !important;
    color: rgba(255, 255, 255, 0.5) !important;
`;

const StyledButton = styled(Button)`
    background: rgb(162, 86, 235) !important;
    color: #ffffff !important;
    margin-top: 20px !important;
`;

const Dices = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

const BetStatusStart = ({ dices, amount }) => (
    <SimpleDialog.Body>
        <Title>Please confirm bet transaction</Title>
    </SimpleDialog.Body>
);

const BetStatusSuccess = ({ dices, amount }) => (
    <SimpleDialog.Body>
        <Title>You bet {amount} ETH on</Title>

        {dices.map(option => (
            <Dice key={option} option={option} size={36} />
        ))}

        <StyledLoader inline centered>
            Waiting for Ethereum network
        </StyledLoader>
    </SimpleDialog.Body>
);

const BetStatusFailed = ({ message }) => (
    <SimpleDialog.Body>
        <Title>{message}</Title>
    </SimpleDialog.Body>
);

const BetStatusWin = ({ dices, win, payment, onClose }) => (
    <SimpleDialog.Body>
        <Title>You won {payment} ETH!</Title>

        <Dice
            option={win}
            size={96}
            color={'linear-gradient(45deg, #62fd9e, #168aa3)'}
        />

        <Dices>
            {dices.map(option => (
                <Dice key={option} option={option} size={36} />
            ))}
        </Dices>

        <StyledButton onClick={onClose} size="large" fluid>
            Play again
        </StyledButton>
    </SimpleDialog.Body>
);

const BetStatusLoose = ({ dices, win, amount, onClose }) => (
    <SimpleDialog.Body>
        <Title>You loose {amount} ETH :(</Title>

        <Dice
            option={win}
            size={96}
            color={'linear-gradient(45deg, #62fd9e, #168aa3)'}
        />

        <Dices>
            {dices.map(option => (
                <Dice key={option} option={option} size={36} />
            ))}
        </Dices>

        <StyledButton onClick={onClose} size="large" fluid>
            Play again
        </StyledButton>
    </SimpleDialog.Body>
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
