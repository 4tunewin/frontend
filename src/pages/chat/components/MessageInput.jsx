import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: transparent;
    color: rgba(255, 255, 255, 0.5);
    border: 0px;
    padding: 5px;
    font-family: 'Proxima Nova Light';
    outline: none;
`;

const MessageInput = ({ onChange }) => (
    <Input placeholder="Write a message..." onChange={onChange} />
);

export default MessageInput;
