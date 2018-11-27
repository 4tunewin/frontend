import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { Table, Message, Segment, Header } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import GameHistoryTab from './GameHistoryTab';
import GameHistoryItem from './GameHistoryItem';

const Container = styled(Segment)`
    background: #27304d !important;
    border-radius: 12px !important;
`;

const StyledTable = styled(Table)`
    background: transparent !important;
`;

const TableHeader = styled(Table.Header)`
    background: #323b56 !important;
    font-size: 14px !important;
    border-radius: 0px !important;

    & tr:first-child th:first-child {
        padding-left: 15px !important;
    }
    & tr:first-child th:last-child {
        padding-right: 15px !important;
    }
`;

const TableHeaderCell = styled(Table.HeaderCell)`
    text-transform: uppercase !important;
    color: rgba(255, 255, 255, 0.6) !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    border-radius: 0px !important;
    border-top: 1px solid #3d455f !important;
    border-bottom: 1px solid #3d455f !important;
`;

const StyledMessage = styled.div`
    clear: both;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.5);
`;

/**
 * Message to show if list of games is empty
 */
const EmptyMessage = () => <StyledMessage info>No games yet</StyledMessage>;

const GameHistoryTable = ({ history }) => (
    <StyledTable basic="very" celled striped>
        <TableHeader>
            <Table.Row>
                <TableHeaderCell>
                    <FormattedMessage
                        id="pages.dice.DiceHistory.header.player"
                        defaultMessage="Player"
                    />
                </TableHeaderCell>
                <TableHeaderCell>Bet</TableHeaderCell>
                <TableHeaderCell>Result</TableHeaderCell>
                <TableHeaderCell>Jackpot</TableHeaderCell>
            </Table.Row>
        </TableHeader>

        <Table.Body>
            {history.map(game => (
                <GameHistoryItem key={game.id} game={game} />
            ))}
        </Table.Body>
    </StyledTable>
);

const TabItem = styled.a``;

const GameHistory = ({ loading, history }) => (
    <Container loading={loading}>
        <GameHistoryTab />

        {isEmpty(history) ? (
            <EmptyMessage />
        ) : (
            <GameHistoryTable history={history} />
        )}
    </Container>
);

export default GameHistory;
