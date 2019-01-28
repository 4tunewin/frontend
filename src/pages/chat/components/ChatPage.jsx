import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const Container = styled.div`
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    background: #27304d;
    border-radius: 10px;
    flex: 1 1 auto;
`;

const ChatPage = () => (
    <Container>
        <Header />
        <Content />
        <Footer />
    </Container>
);

export default ChatPage;
