import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import Message from './Message';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
`;

const MessagesList = ({ messages }) => (
    <Wrapper>
        {map(messages, message => (
            <Message key={message.id} message={message} />
        ))}
    </Wrapper>
);

export default MessagesList;
