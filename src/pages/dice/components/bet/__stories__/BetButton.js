import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Map } from 'immutable';
import { ReduxProvider, CenteredContent } from '../../../../../storybook';
import BetButton from '../BetButton';

storiesOf('dice/bet/BetButton', module)
    .addDecorator(story => (
        <ReduxProvider
            store={{ user: () => new Map({ accounts: [1] }) }}
            story={story()}
        />
    ))
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <BetButton onClick={action('onClick')} />);
