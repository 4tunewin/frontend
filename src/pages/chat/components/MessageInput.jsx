import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
`;

const Input = styled.input`
    background: #182038;
    color: rgba(255, 255, 255, 0.5);
    border: 0px;
    padding: 10px;
    font-family: 'Proxima Nova Light';
    outline: none;
    flex: 1 1 auto;
    margin-right: 10px;
    border-radius: 5px;
`;

const Button = styled.div`
    background: #a256eb;
    color: #ffffff;
    font-family: 'Proxima Nova Regular';
    font-size: 14px;
    border-radius: 3px;
    padding: 10px 15px 10px 15px;
    text-align: center;
    cursor: pointer;
    flex: 0 0 auto;
`;

const MessageInput = ({ onChange }) => (
    <Wrapper>
        <Input placeholder="Write a message..." onChange={onChange} />
        <Button>Send</Button>
    </Wrapper>
);

export default MessageInput;
