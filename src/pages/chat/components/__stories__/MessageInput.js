import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import MessageInput from '../MessageInput';

storiesOf('pages/chat/MessageInput', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <MessageInput />);
