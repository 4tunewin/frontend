import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { isEmpty } from 'lodash';
import { Table, Loader, Message } from 'semantic-ui-react';

import GameHistoryItem from './GameHistoryItem';

/**
 * Spinner component to show while loading history of games
 */
const Spinner = () => <Loader size="large" active />;

/**
 * Message to show if list of games is empty
 */
const EmptyMessage = () => (
    <Message info>There are no games yet, be the first!</Message>
);

const GameHistory = ({ history }) => (
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

// Show spinner while loading game history
const withSpinner = branch(({ loading }) => loading, renderComponent(Spinner));

// Show message if list of games is empty
const withEmptyMessage = branch(
    ({ history }) => isEmpty(history),
    renderComponent(EmptyMessage),
);

export default compose(
    withSpinner,
    withEmptyMessage,
)(GameHistory);
