import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import UsernameInput from '../UsernameInput';

const Wrapper = styled.div`
    width: 300px;
`;

storiesOf('pages/chat/UsernameInput', module)
    .addDecorator(story => <Wrapper>{story()}</Wrapper>)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <UsernameInput />);
