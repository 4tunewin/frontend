import React from 'react';
import styled from 'styled-components';
import { Dimmer, Loader, Button } from 'semantic-ui-react';

import { SimpleDialog, Dice } from '../../../../common';
import { FormattedMessage } from 'react-intl';
import BetErrorMessage from './BetErrorMessage';

const Title = styled.div`
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
    padding-bottom: ${({ padding }) => (padding ? 15 : 0)}px;
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

const StyledSimpleDialog = styled(SimpleDialog)`
    max-width: 400px;
`;

const BetStatusStart = ({ dices, amount }) => (
    <SimpleDialog.Body>
        <Title>
            <FormattedMessage
                id="page.dice.bet.BetStatusStart.title"
                defaultMessage="Please confirm bet transaction"
            />
        </Title>
    </SimpleDialog.Body>
);

const BetStatusSuccess = ({ dices, amount }) => (
    <SimpleDialog.Body>
        <Title padding>
            <FormattedMessage
                id="page.dice.bet.BetStatusSuccess.title"
                defaultMessage="You bet {amount} ETH on"
                values={{ amount }}
            />
        </Title>

        {dices.map(option => (
            <Dice key={option} option={option} size={36} />
        ))}

        <StyledLoader inline centered>
            <FormattedMessage
                id="page.dice.bet.BetStatusSuccess.loader"
                defaultMessage="Waiting for Ethereum network"
            />
        </StyledLoader>
    </SimpleDialog.Body>
);

const PlayAgainButton = ({ onClick }) => (
    <StyledButton onClick={onClick} size="large" fluid>
        <FormattedMessage
            id="page.dice.bet.PlayAgainButton"
            defaultMessage="Play again"
        />
    </StyledButton>
);

const BetStatusFailed = ({ error, onClose }) => (
    <SimpleDialog.Body>
        <Title padding>
            <BetErrorMessage error={error} />
        </Title>

        <PlayAgainButton onClick={onClose} />
    </SimpleDialog.Body>
);

const BetResultRefund = ({ amount, onClose }) => (
    <SimpleDialog.Body>
        <Title padding>
            <FormattedMessage
                id="page.dice.bet.BetStatusRefund.title"
                defaultMessage="We refunded {amount} ETH"
                values={{ amount }}
            />
        </Title>

        <FormattedMessage
            id="page.dice.bet.BetStatusRefund.body"
            defaultMessage="We were not able to process your bet request, so we refunded {amount}{' '}
        ETH back to your account. We sincerely apologize for any
        inconvenience."
            values={{ amount }}
        />

        <PlayAgainButton onClick={onClose} />
    </SimpleDialog.Body>
);

const BetResultFailWithoutRefund = ({ onClose }) => (
    <SimpleDialog.Body>
        <Title padding>
            <FormattedMessage
                id="page.dice.bet.BetStatusWin.title"
                defaultMessage="Bet has failed"
            />
        </Title>

        <FormattedMessage
            id="page.dice.bet.BetResultFailWithoutRefund.body"
            defaultMessage="We were not able to process your bet, but don't worry, your funds are safe and will be refunded shortly."
        />

        <PlayAgainButton onClick={onClose} />
    </SimpleDialog.Body>
);

const BetResultWin = ({ dices, win, payment, onClose }) => (
    <SimpleDialog.Body>
        <Title padding>
            <FormattedMessage
                id="page.dice.bet.BetStatusWin.title"
                defaultMessage="You won {amount} ETH!"
                values={{ amount: payment }}
            />
        </Title>

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

        <PlayAgainButton onClick={onClose} />
    </SimpleDialog.Body>
);

const BetResultLoose = ({ dices, win, amount, onClose }) => (
    <SimpleDialog.Body>
        <Title padding>
            <FormattedMessage
                id="page.dice.bet.BetStatusLoose.title"
                defaultMessage="You loose {amount} ETH :("
                values={{ amount }}
            />
        </Title>

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

        <PlayAgainButton onClick={onClose} />
    </SimpleDialog.Body>
);

const BetStatusResult = ({ result, ...props }) => {
    let Component = null;

    switch (result) {
        case 'WIN':
            Component = BetResultWin;
            break;
        case 'LOOSE':
            Component = BetResultLoose;
            break;
        case 'FAIL':
            if (props.refunded) {
                Component = BetResultRefund;
            } else {
                Component = BetResultFailWithoutRefund;
            }
            break;
        default:
            return null;
    }

    return <Component {...props} />;
};

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
        case 'RESULT':
            Component = BetStatusResult;
            break;
        default:
            return null;
    }

    return <Component {...props} />;
};

const BetStatus = ({ status, ...props }) => (
    <Dimmer page active>
        <StyledSimpleDialog>
            <BetStatusContent status={status} {...props} />
        </StyledSimpleDialog>
    </Dimmer>
);

export default BetStatus;
