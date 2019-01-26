import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import MessagesList from '../MessagesList';

const messages = [
    {
        author: {
            username: 'John',
            address: '0x38947bd14DAa1DE466dfeed4a3eea9Fb7B4647e5',
        },
        text: 'Hi',
    },
    {
        author: {
            username: 'Bob',
            address: '0xF734Ca638038a18448afe261cfD9538A37aBbE6F',
        },
        text: 'Hey!',
    },
    {
        author: {
            username: 'John',
            address: '0x38947bd14DAa1DE466dfeed4a3eea9Fb7B4647e5',
        },
        text: 'How are you?',
    },
    {
        author: {
            username: 'Bob',
            address: '0xF734Ca638038a18448afe261cfD9538A37aBbE6F',
        },
        text: "I'm fine, and you?",
    },
    {
        author: {
            username: 'John',
            address: '0x38947bd14DAa1DE466dfeed4a3eea9Fb7B4647e5',
        },
        text: 'Great',
    },
];

storiesOf('pages/chat/MessagesList', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <MessagesList messages={messages} />);
