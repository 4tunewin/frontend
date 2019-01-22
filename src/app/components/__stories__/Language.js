import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Map } from 'immutable';
import { CenteredContent } from '../../../storybook';
import Language from '../Language';

const options = [
    {
        value: 'en',
        text: 'English',
        flag: 'us',
    },
    {
        value: 'ru',
        text: 'Russian',
        flag: 'ru',
    },
];

storiesOf('layout/Language', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <Language
            options={options}
            active={options[0]}
            onChange={action('onChange')}
        />
    ));
