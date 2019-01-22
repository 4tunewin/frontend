import React from 'react';
import { FormattedMessage } from 'react-intl';

const ErrorMessage = ({ error }) => {
    if (error.message.indexOf('User denied transaction signature') !== -1) {
        return (
            <FormattedMessage
                id="page.dice.bet.BetErrorMessage.txRejected"
                defaultMessage="We are unable to place a bet, because you have rejected bet transaction."
            />
        );
    }

    return <span>{error.message}</span>;
};

export default ErrorMessage;
