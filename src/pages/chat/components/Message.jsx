import React from 'react';
import styled from 'styled-components';

import Avatar from './Avatar';

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    margin: 5px 0px 5px 0px;
`;

const Bubble = styled.div`
    display: flex;
    flex: 1 1 auto;
    display-direction: row;
    background-color: ${({ inverted }) =>
        inverted ? 'rgb(213, 61, 205, 0.3)' : '#323b56'};
    padding: 10px;
    border-radius: 5px;
`;

const Left = styled.div`
    flex: 0 0 auto;
    padding: 3px 10px 3px 0px;
`;

const Center = styled.div`
    flex: 1 1 auto;
`;

const Right = styled.div`
    flex: 0 0 auto;
    padding-left: 10px;
`;

const Author = styled.div`
    font-family: 'Proxima Nova Semibold';
    color: rgba(255, 255, 255, 0.7);
`;

const Text = styled.div`
    font-family: 'Proxima Nova Light';
    color: rgba(255, 255, 255, 0.5);
`;

const Time = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Proxima Nova Light';
    font-size: 12px;
`;

const Message = ({ message: { author, text }, inverted }) => (
    <Wrapper>
        {/* <Left>
            <Avatar address={author.address} />
        </Left> */}
        <Bubble inverted={inverted}>
            <Center>
                <Author>{author.username}</Author>
                <Text>{text}</Text>
            </Center>
            <Right>
                <Time>10:01</Time>
            </Right>
        </Bubble>
    </Wrapper>
);

export default Message;
