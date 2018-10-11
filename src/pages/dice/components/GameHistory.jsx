import React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { Table, Loader } from 'semantic-ui-react';

import GameHistoryItem from './GameHistoryItem';

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
const withSpinner = branch(({ loading }) => loading, renderComponent(Loader));

export default compose(withSpinner)(GameHistory);
