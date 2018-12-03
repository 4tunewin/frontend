import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import DiceSelect from '../DiceSelect';

storiesOf('dice/bet/DiceSelect', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <DiceSelect
            input={{
                value: [],
                onChange: action('onChange'),
            }}
        />
    ))
    .add('selected options', () => (
        <DiceSelect
            input={{
                value: [1, 3, 5],
                onChange: action('onChange'),
            }}
        />
    ));
