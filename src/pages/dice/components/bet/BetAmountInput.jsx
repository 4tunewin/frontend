import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
import { round } from 'lodash';

const Input = styled.div`
    flex: 1 0 auto;
    text-align: center;
    padding: 10px 16px 10px 16px;
    border: 1px solid #474e67;
    border-radius: 5px;
    background: #323b56 !important;
    color: #ffffff;
    font-size: 42px;
    line-height: 42px;
`;

const ActionButton = styled.div`
    cursor: pointer;
    border-radius: 50%;
    background: #5b6278;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    margin-top: -11px;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
`;

const DecButton = styled(ActionButton)`
    left: 26px;
`;

const IncButton = styled(ActionButton)`
    right: 26px;
`;

const BetAmountInput = ({ value, onInc, onDec }) => (
    <Input>
        <DecButton onClick={onDec}>-</DecButton>
        <span>{parseFloat(value || 0).toFixed(2)}</span>
        <IncButton onClick={onInc}>+</IncButton>
    </Input>
);

const actionHandlers = withHandlers({
    onInc: ({ onChange, value }) => () => {
        onChange(round(parseFloat(value) + 0.05, 3));
    },
    onDec: ({ onChange, value }) => () => {
        onChange(round(parseFloat(value) - 0.05, 3));
    },
});

export default compose(actionHandlers)(BetAmountInput);
