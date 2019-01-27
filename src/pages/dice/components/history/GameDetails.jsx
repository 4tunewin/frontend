import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Popup } from 'semantic-ui-react';

import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { encodePacked, eligebleForJackpot } from '../../../../lib/dice';
import { ExplorerLink } from '../../../../common';
import { FormattedMessage } from 'react-intl';

const DICE_OPTIONS = ['1', '2', '3', '4', '5', '6'];

const FadeIn = keyframes`
    0% { 
        opacity: 0;
    }   
    100% {
        opacity: 1;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px 0px 3px;
    border-bottom: 1px solid #2e3653;
`;

const TitleCell = styled.div`
    flex: 0 0 25%;
`;

const ValueCell = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1 1 auto;
`;

const Wrapper = styled.div`
    flex-direction: column;
    margin-left: -20px;
    margin-right: -20px;
    padding: 0px 20px 0px 20px;
    background: #182038;

    display: ${({ show }) => (show ? 'flex' : 'none')};
    animation: ${FadeIn} 0.6s ease-out;

    ${RowWrapper} {
        &:last-child {
            border-bottom: 0px !important;
        }
    }
`;

const Row = ({ title, value, hint }) => (
    <Popup
        trigger={
            <RowWrapper>
                <TitleCell>{title}</TitleCell>
                <ValueCell>{value}</ValueCell>
            </RowWrapper>
        }
        content={hint}
        inverted
        size="small"
    />
);

const GameDetails = ({ show, game, outcome }) => (
    <Wrapper show={show}>
        <Row
            title={
                <FormattedMessage
                    id="page.dice.history.GameDetails.address.title"
                    defaultMessage="address"
                />
            }
            value={<ExplorerLink address={game.bet.gambler} />}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.address.hint"
                    defaultMessage="An Ethereum address which issued bet transaction"
                />
            }
        />
        <Row
            title={
                <FormattedMessage
                    id="page.dice.history.GameDetails.bet.title"
                    defaultMessage="bet"
                />
            }
            value={`${fromWei(game.bet.amount, 'ether')} ETH`}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.bet.hint"
                    defaultMessage="The amount of Ethereum that was sent as a bet"
                />
            }
        />
        <Row
            title={
                <FormattedMessage
                    id="page.dice.history.GameDetails.betOn.title"
                    defaultMessage="bet on"
                />
            }
            value={outcome.bets.join(', ')}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.betOn.hint"
                    defaultMessage="The numbers the bet was made on"
                />
            }
        />
        <Row
            title={
                <FormattedMessage
                    id="page.dice.history.GameDetails.betTrx.title"
                    defaultMessage="bet trx"
                />
            }
            value={
                <ExplorerLink type="tx" address={game.bet.transactionHash} />
            }
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.betTrx.hint"
                    defaultMessage="Transaction hash of the bet transaction"
                />
            }
        />
        <Row
            title="sha3(secret)"
            value={game.bet.commit}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.sha3Secret.hint"
                    defaultMessage="Hash of the secret number from the house"
                />
            }
        />
        <Row
            title="secret"
            value={game.reveal.secret}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.secret.hint"
                    defaultMessage="Actual secret number from the house"
                />
            }
        />
        <Row
            title="sha3(bet block)"
            value={`0x${encodePacked([game.bet.blockNumber])}`}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.sha3BetBlock.hint"
                    defaultMessage="Block hash of the block with transaction"
                />
            }
        />
        <Row
            title="sha3(blk + secret)"
            value={`0x${encodePacked([
                game.reveal.secret,
                game.bet.blockNumber,
            ])}`}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.sha3BlkSecret.hint"
                    defaultMessage="Hash of the bet block hash and secret number"
                />
            }
        />
        <Row
            title="sha3 mod 6"
            value={
                DICE_OPTIONS[
                    new BigNumber(
                        '0x' +
                            encodePacked([
                                game.reveal.secret,
                                game.bet.blockNumber,
                            ]),
                    ).mod(6)
                ]
            }
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.sha3Modulo.hint"
                    defaultMessage="The same as above, but with modulo over available options"
                />
            }
        />
        {eligebleForJackpot(game.bet.amount) && (
            <Row
                title={
                    <FormattedMessage
                        id="page.dice.history.GameDetails.jackpot.title"
                        defaultMessage="jackpot"
                    />
                }
                value={outcome.jackpot}
                hint={
                    <FormattedMessage
                        id="page.dice.history.GameDetails.jackpot.hint"
                        defaultMessage="Jackpot number"
                    />
                }
            />
        )}
        <Row
            title={
                <FormattedMessage
                    id="page.dice.history.GameDetails.wins.title"
                    defaultMessage="wins"
                />
            }
            value={`${fromWei(
                new BigNumber(game.payment, 10)
                    .plus(game.jackpotPayment || 0, 10)
                    .toString(),
                'ether',
            )}
                ETH`}
            hint={
                <FormattedMessage
                    id="page.dice.history.GameDetails.wins.hint"
                    defaultMessage="The total winning of the bet"
                />
            }
        />
    </Wrapper>
);

export default GameDetails;
