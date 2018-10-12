import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { Table, Message, Segment, Header } from 'semantic-ui-react';

import GameHistoryItem from './GameHistoryItem';
import FilterHistoryButton from '../containers/FilterHistoryButton';

const StyledMessage = styled(Message)`
    clear: both;
    text-align: center;
`;

/**
 * Message to show if list of games is empty
 */
const EmptyMessage = () => <StyledMessage info>No games yet</StyledMessage>;

const GameHistoryTable = ({ history }) => (
    <Table basic="very" celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Player</Table.HeaderCell>
                <Table.HeaderCell>Bet</Table.HeaderCell>
                <Table.HeaderCell>Result</Table.HeaderCell>
                <Table.HeaderCell>Jackpot</Table.HeaderCell>
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
    <Segment loading={loading}>
        <Header floated="left">Games history</Header>
        <FilterHistoryButton floated="right" />
        {isEmpty(history) ? (
            <EmptyMessage />
        ) : (
            <GameHistoryTable history={history} />
        )}
    </Segment>
);

export default GameHistory;
