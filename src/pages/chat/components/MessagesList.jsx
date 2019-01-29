import React from 'react';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { map } from 'lodash';
import { Loader } from 'semantic-ui-react';

import Message from './Message';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`;

const MessagesList = ({ messages }) => (
    <Wrapper>
        {map(messages, message => (
            <Message key={message.id} message={message} />
        ))}
    </Wrapper>
);

// Sjow spiner while loading list of messages
const withSpinner = branch(
    ({ loading }) => true,
    renderComponent(() => <Loader size="large" active />),
);

export default compose(withSpinner)(MessagesList);
