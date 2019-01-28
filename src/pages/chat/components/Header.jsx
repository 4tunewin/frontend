import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const Wrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    border-bottom: 1px solid #3d455f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 55px;
    line-height: 55px;
    padding: 0px 20px 0px 20px;
`;

const Title = styled.div`
    flex: 1 1 auto;
    font-family: 'Proxima Nova Semibold';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
`;

const Stats = styled.div`
    flex: 1 1 auto;
    font-family: 'Proxima Nova Light';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
`;

const Header = () => (
    <Wrapper>
        <Title>Chat</Title>
        <Stats>Online 500 users</Stats>
    </Wrapper>
);

export default Header;
