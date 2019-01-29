import React from 'react';
import styled from 'styled-components';

import MessagesList from '../containers/MessagesList';

const Wrapper = styled.div`
    padding: 20px;
    flex: 1 1 auto;
`;

const Content = () => (
    <Wrapper>
        <MessagesList loading />
    </Wrapper>
);

export default Content;
