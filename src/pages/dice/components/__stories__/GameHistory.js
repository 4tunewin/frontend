import React from 'react';
import { storiesOf } from '@storybook/react';

import { Map } from 'immutable';
import { ReduxProvider } from '../../../../storybook';
import GameHistory from '../GameHistory';
import { history } from './fixtures';

storiesOf('dice/GameHistory', module)
    .addDecorator(story => (
        <ReduxProvider
            store={{
                user: () => new Map({ accounts: [1] }),
                dice: () => new Map({}),
            }}
            story={story()}
        />
    ))
    .add('default', () => <GameHistory history={history} />);
