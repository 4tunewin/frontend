import React from 'react';
import { Tab } from '../../../../common';

const GameHistoryTab = ({ filtered, onFilter, onReset }) => (
    <Tab>
        <Tab.Item active={!filtered} onClick={onReset}>
            ALL HISTORY
        </Tab.Item>
        <Tab.Item active={filtered} onClick={onFilter}>
            MY BETS
        </Tab.Item>
    </Tab>
);

export default GameHistoryTab;
