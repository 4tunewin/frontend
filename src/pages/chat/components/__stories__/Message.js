import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import Message from '../Message';

const message = {
    author: {
        username: 'John',
        address: '0x38947bd14DAa1DE466dfeed4a3eea9Fb7B4647e5',
    },
    text: 'Hello world',
};

storiesOf('pages/chat/Message', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Message message={message} />)
    .add('inverted', () => <Message message={message} inverted />);
