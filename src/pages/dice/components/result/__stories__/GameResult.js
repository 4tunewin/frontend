import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import GameResult from '../GameResult';

storiesOf('dice/result/GameResult', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <GameResult dice={5} />);
