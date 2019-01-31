import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1 1 auto;
    font-family: 'Proxima Nova Light';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-align: right;
`;

const OnlineUsers = ({ online }) => <Wrapper>Online {online} users</Wrapper>;

export default OnlineUsers;
