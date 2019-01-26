import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
`;

const Input = styled.input`
    background: transparent;
    color: rgba(255, 255, 255, 0.5);
    border: 0px;
    padding: 5px;
    font-family: 'Proxima Nova Light';
    outline: none;
`;

const Button = styled.div`
    background: #a256eb;
    color: #ffffff;
    font-family: 'Proxima Nova Regular';
    font-size: 14px;
    border-radius: 3px;
    padding: 5px 10px 5px 10px;
    text-align: center;
    cursor: pointer;
`;

const UsernameInput = ({ value, onChange, onSubmit }) => (
    <Wrapper>
        <Input placeholder="Type your username" onChange />
        <Button>Join</Button>
    </Wrapper>
);

export default UsernameInput;
