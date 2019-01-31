import React from 'react';
import styled from 'styled-components';

import OnlineUsers from '../containers/OnlineUsers';

const Wrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    border-bottom: 1px solid #3d455f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 55px;
    line-height: 55px;
    padding: 0px 25px 0px 25px;
`;

const Title = styled.div`
    flex: 1 1 auto;
    font-family: 'Proxima Nova Semibold';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
`;

const Header = () => (
    <Wrapper>
        <Title>Chat</Title>
        <OnlineUsers />
    </Wrapper>
);

export default Header;
