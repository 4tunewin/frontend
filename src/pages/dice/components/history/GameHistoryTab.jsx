import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Tab } from '../../../../common';

const GameHistoryTab = ({ filtered, onFilter, onReset }) => (
    <Tab>
        <Tab.Item active={!filtered} onClick={onReset}>
            <FormattedMessage
                id="pages.dice.history.GameHistoryTab.all"
                defaultMessage="ALL HISTORY"
            />
        </Tab.Item>
        <Tab.Item active={filtered} onClick={onFilter}>
            <FormattedMessage
                id="pages.dice.history.GameHistoryTab.my"
                defaultMessage="MY BETS"
            />
        </Tab.Item>
    </Tab>
);

export default GameHistoryTab;
