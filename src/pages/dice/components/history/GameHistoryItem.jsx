import React from 'react';
import styled from 'styled-components';
import { compose, withProps } from 'recompose';
import { truncate } from 'lodash';
import { Table } from 'semantic-ui-react';

import { computeOutcome, eligebleForJackpot } from '../../../../lib/dice';

import DiceOption from './DiceOption';
import { HashAvatar } from '../../../../common';

const TableRow = styled(Table.Row)`
    color: #ffffff;
    font-size: 12px;
`;

const StyledAvatar = styled(HashAvatar)`
    margin-right: 5px;
`;

const CenteredContent = styled.div`
    display: flex;
    align-items: center;
`;

const WinAmount = styled.span`
    color: rgba(255, 255, 255, 0.5);
`;

/**
 * Returns formated amount in ether
 *
 * @param {String} value - Amount in wi
 */
const formatAmount = value => {
    return parseFloat(window.web3.fromWei(value, 'ether')).toFixed(3);
};

const GameHistoryItem = ({ game, bets, jackpot, win }) => (
    <TableRow key={game.id}>
        <Table.Cell>
            <CenteredContent>
                <StyledAvatar
                    hash={game.bet.gambler}
                    options={{
                        foreground: [255, 255, 255, 255],
                        background: [0, 0, 0, 0],
                    }}
                />
                {truncate(game.bet.gambler, { length: 8, omission: '' })}
            </CenteredContent>
        </Table.Cell>
        <Table.Cell>
            <CenteredContent>
                {formatAmount(game.bet.amount)}
                <DiceOption options={bets} />
            </CenteredContent>
        </Table.Cell>
        <Table.Cell>
            <CenteredContent>
                <DiceOption options={[win]} />
                <WinAmount>
                    {game.payment === '0' ? (
                        <span>&mdash;</span>
                    ) : (
                        formatAmount(game.payment)
                    )}
                </WinAmount>
            </CenteredContent>
        </Table.Cell>
        <Table.Cell>
            <WinAmount>
                {eligebleForJackpot(game.bet.amount) ? (
                    jackpot
                ) : (
                    <span>&mdash;</span>
                )}
            </WinAmount>
        </Table.Cell>
    </TableRow>
);

// Props with current game outcome values
const gameOutcomeProps = ({ game }) =>
    computeOutcome({
        modulo: game.bet.modulo,
        betMask: game.bet.mask,
        betBlockHash: game.bet.blockHash,
        reveal: game.reveal.reveal,
    });

export default compose(withProps(gameOutcomeProps))(GameHistoryItem);
