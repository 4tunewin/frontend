import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { Segment } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import Table from './HistoryTable';
import GameHistoryTab from '../../containers/history/GameHistoryTab';
import GameHistoryItem from './GameHistoryItem';

const Container = styled(Segment)`
    height: 100%;
    flex: 1 1 auto;
    background: #27304d !important;
    border-radius: 10px !important;
    border-width: 0px !important;
    padding: 0px !important;
    min-height: 200px;
    background: #27304d;
    padding: 20px;

    &.loading:before {
        background: rgba(50, 59, 86, 0.8) !important;
        border-radius: 10px !important;
    }
`;

const EmptyMessageWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-family: 'Proxima Nova Semibold';
    color: rgba(255, 255, 255, 0.5);
`;

/**
 * Message to show if list of games is empty
 */
const EmptyMessage = () => (
    <EmptyMessageWrapper>
        <FormattedMessage
            id="pages.dice.history.EmptyMessage"
            defaultMessage="No games yet"
        />
    </EmptyMessageWrapper>
);

const GameHistoryTable = ({ history }) => (
    <Table basic="very" singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell width="27%">
                    <FormattedMessage
                        id="pages.dice.history.GameHistory.header.player"
                        defaultMessage="Player"
                    />
                </Table.HeaderCell>
                <Table.HeaderCell width="30%">
                    <FormattedMessage
                        id="pages.dice.history.GameHistory.header.bet"
                        defaultMessage="Bet"
                    />
                </Table.HeaderCell>
                <Table.HeaderCell width="23%">
                    <FormattedMessage
                        id="pages.dice.history.GameHistory.header.result"
                        defaultMessage="Result"
                    />
                </Table.HeaderCell>
                <Table.HeaderCell width="20%">
                    <FormattedMessage
                        id="pages.dice.history.GameHistory.header.jackpot"
                        defaultMessage="Jackpot"
                    />
                </Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {history.map(game => (
                <GameHistoryItem key={game.id} game={game} />
            ))}
        </Table.Body>
    </Table>
);

const GameHistory = ({ loading, history }) => (
    <Container loading={loading}>
        <GameHistoryTab />

        {isEmpty(history) ? (
            !loading && <EmptyMessage />
        ) : (
            <GameHistoryTable history={history} />
        )}
    </Container>
);

export default GameHistory;
