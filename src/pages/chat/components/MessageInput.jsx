import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { trim } from 'lodash';
import { Label } from 'semantic-ui-react';

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

const MessageInput = ({ error, value, onChange, onSend }) => (
    <Wrapper>
        <Input
            placeholder="Write a message..."
            value={value}
            onChange={onChange}
        />
        <Button onClick={onSend}>Send</Button>
        {error && <Label error>{error}</Label>}
    </Wrapper>
);

/**
 * Keep state of current value
 */
const withValue = withStateHandlers(
    { value: null },
    {
        onChange: ownProps => e => ({
            value: e.target.value,
        }),
        onReset: ownProps => () => ({
            value: '',
        }),
    },
);

const withError = withStateHandlers(
    { error: null },
    {
        onError: ownProps => error => ({
            error,
        }),
        onResetError: ownProps => () => ({
            error: '',
        }),
    },
);

const withOnSend = withHandlers({
    onSend: ({
        value,
        onChange,
        onSend: _onSend,
        onReset,
        onError,
        onResetError,
    }) => () => {
        onResetError();

        const normalizedValue = trim(value);
        if (normalizedValue.length) {
            _onSend(value)
                .then(onReset)
                .catch(e => {
                    onError(e.message);
                });
        }
    },
});

export default compose(
    withValue,
    withError,
    withOnSend,
)(MessageInput);
