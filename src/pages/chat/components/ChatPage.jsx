import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import MessagesList from './MessagesList';

const Container = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: row;
    background-color: #182038 !important;
`;

const ChatPage = () => (
    <Container>
        <Header />
        <MessagesList />
        <Footer />
    </Container>
);

export default ChatPage;
