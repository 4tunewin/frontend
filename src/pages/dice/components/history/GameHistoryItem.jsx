import React from 'react';
import styled from 'styled-components';
import { compose, withProps, withStateHandlers } from 'recompose';
import { truncate, indexOf } from 'lodash';

import { fromWei } from 'web3-utils';
import { computeOutcome, eligebleForJackpot } from '../../../../lib/dice';

import Table from './HistoryTable';
import DiceOption from './DiceOption';
import GameDetails from './GameDetails';
import { HashAvatar } from '../../../../common';

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

const Row = styled(Table.Row)`
    flex-direction: column;
    cursor: pointer;
    padding-right: 26px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;
    position: relative;

    &::after {
        font-family: Icons;
        content: "${({ active }) => (active ? '\f107' : '\f105')}";
        position: absolute;
        right: 0px;
        line-height: 31px;
    }
`;

/**
 * Returns formated amount in ether
 *
 * @param {String} value - Amount in wi
 */
const formatAmount = value => {
    return parseFloat(fromWei(value, 'ether')).toFixed(3);
};

const GameHistoryItem = ({ game, bets, jackpot, win, show, onToggle }) => (
    <Row>
        <Title active={show} onClick={onToggle}>
            <Table.Cell width="27%">
                <CenteredContent>
                    <StyledAvatar
                        hash={game.bet.gambler}
                        size={21}
                        options={{
                            foreground: [255, 255, 255, 255],
                            background: [0, 0, 0, 0],
                        }}
                    />
                    {truncate(game.bet.gambler, { length: 8, omission: '' })}
                </CenteredContent>
            </Table.Cell>
            <Table.Cell width="30%">
                <CenteredContent>
                    {formatAmount(game.bet.amount)}
                    <DiceOption options={bets} />
                </CenteredContent>
            </Table.Cell>
            <Table.Cell width="23%">
                <CenteredContent>
                    <DiceOption
                        options={[win]}
                        highlight={indexOf(bets, win) !== -1}
                        left
                    />
                    <WinAmount>
                        {game.payment === '0' ? (
                            <span>&mdash;</span>
                        ) : (
                            formatAmount(game.payment)
                        )}
                    </WinAmount>
                </CenteredContent>
            </Table.Cell>
            <Table.Cell width="20%">
                <WinAmount>
                    {eligebleForJackpot(game.bet.amount) ? (
                        jackpot
                    ) : (
                        <span>&mdash;</span>
                    )}
                </WinAmount>
            </Table.Cell>
        </Title>
        <GameDetails show={show} game={game} outcome={{ bets, win, jackpot }} />
    </Row>
);

// Props with current game outcome values
const gameOutcomeProps = ({ game }) =>
    computeOutcome({
        modulo: game.bet.modulo,
        betMask: game.bet.mask,
        betBlockHash: game.bet.blockHash,
        secret: game.reveal.secret,
    });

const withDetailsToggle = withStateHandlers(
    {
        show: false,
    },
    {
        onToggle: ({ show }) => () => ({
            show: !show,
        }),
    },
);

export default compose(
    withProps(gameOutcomeProps),
    withDetailsToggle,
)(GameHistoryItem);
