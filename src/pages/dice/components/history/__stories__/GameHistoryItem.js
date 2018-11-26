import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../../storybook';
import GameHistoryItem from '../GameHistoryItem';

import {
    failedHistoryItem,
    winHistoryItem,
    jackpotHistoryItem,
} from '../../__stories__/fixtures';

storiesOf('dice/history/GameHistoryItem', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('bet failed', () => <GameHistoryItem game={failedHistoryItem} />)
    .add('bet win', () => <GameHistoryItem game={winHistoryItem} />)
    .add('bet win jacpot', () => <GameHistoryItem game={jackpotHistoryItem} />);
