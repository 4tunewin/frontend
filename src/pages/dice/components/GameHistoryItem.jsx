import React from 'react';
import { compose, withProps } from 'recompose';
import { truncate } from 'lodash';
import { Table } from 'semantic-ui-react';

import { computeOutcome, eligebleForJackpot } from '../../../lib/dice';

import DiceOption from './DiceOption';
import { HashAvatar } from '../../../components';

const GameHistoryItem = ({ game, bets, jackpot, win }) => (
    <Table.Row key={game.id}>
        <Table.Cell>
            <HashAvatar hash={game.bet.gambler} />
            {truncate(game.bet.gambler, { length: 8, omission: '' })}
        </Table.Cell>
        <Table.Cell>
            <DiceOption options={bets} />
            {window.web3.fromWei(game.bet.amount, 'ether')}
        </Table.Cell>
        <Table.Cell>
            <DiceOption options={[win]} />
            {game.payment === '0' ? (
                <span>&mdash;</span>
            ) : (
                window.web3.fromWei(game.payment, 'ether')
            )}
        </Table.Cell>
        <Table.Cell>
            {eligebleForJackpot(game.bet.amount) ? (
                jackpot
            ) : (
                <span>&mdash;</span>
            )}
        </Table.Cell>
    </Table.Row>
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
