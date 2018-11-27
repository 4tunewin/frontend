import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import BetAmount from '../BetAmount';

storiesOf('dice/bet/BetAmount', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <BetAmount input={{ value: null, onChange: action('onChange') }} />
    ))
    .add('selected', () => (
        <BetAmount input={{ value: '0.10', onChange: action('onChange') }} />
    ));
