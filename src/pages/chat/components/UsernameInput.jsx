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
    color: ${({ error }) => (!error ? 'rgba(255, 255, 255, 0.5)' : '#9f3a38')};
    border: 1px solid ${({ error }) => (!error ? '#182038' : '#9f3a38')};
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

const UsernameInput = ({ error, value, onChange, onSubmit }) => (
    <Wrapper>
        <Input
            placeholder="Type your username"
            value={value}
            onChange={onChange}
            error={error}
        />
        <Button onClick={onSubmit}>Join</Button>
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
    },
);

const withError = withStateHandlers(
    { error: false },
    {
        onError: ownProps => () => ({
            error: true,
        }),
        onResetError: ownProps => () => ({
            error: false,
        }),
    },
);

const onSubmit = withHandlers({
    onSubmit: ({
        value,
        onChange,
        onSubmit: _onSubmit,
        onReset,
        onError,
        onResetError,
    }) => () => {
        onResetError();

        const normalizedValue = trim(value);
        if (normalizedValue.length) {
            _onSubmit(value).catch(onError);
        }
    },
});

export default compose(
    withValue,
    withError,
    onSubmit,
)(UsernameInput);
