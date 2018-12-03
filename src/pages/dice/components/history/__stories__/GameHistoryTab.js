import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import GameHistoryTab from '../GameHistoryTab';

storiesOf('dice/history/GameHistoryTab', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <GameHistoryTab onClick={action('onClick')} />);
