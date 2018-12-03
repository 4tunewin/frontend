import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
import { round, min, max } from 'lodash';
import { Icon } from 'semantic-ui-react';

const Input = styled.div`
    position: relative;
    flex: 1 0 auto;
    text-align: center;
    padding: 10px 16px 10px 16px;
    border: 1px solid #474e67;
    border-radius: 5px;
    background: #323b56 !important;
    color: #ffffff;
    font-size: 42px;
    line-height: 42px;
    user-select: none;
`;

const ActionButton = styled.div`
    border-radius: 50%;
    cursor: ${({ disabled }) => (disabled ? 'cursor' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
    background: #5b6278;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    margin-top: -11px;
    font-family: 'Lato, Helvetica Neue, Arial, Helvetica, sans-serif';

    transition: opacity 0.5s;
`;

const DecButton = styled(ActionButton)`
    left: 10px;

    &:after {
        content: '-';
        position: absolute;
        left: 8px;
        top: 5px;
        font-size: 19px;
        line-height: 10px;
    }
`;

const IncButton = styled(ActionButton)`
    right: 10px;

    &:after {
        content: '+';
        position: absolute;
        left: 6px;
        top: 5px;
        font-size: 19px;
        line-height: 10px;
    }
`;

const CaretWrapper = styled.div`
    position: absolute;
    left: 20px;
    right: 20px;
    top: 0px;
    bottom: 0px;
    pointer-events: none;
`;

const Caret = styled(Icon)`
    position: absolute;
    left: ${({ offset }) => offset}%;
    bottom: -6px;
    font-size: 17px !important;
    line-height: 17px;
    transition: left 0.5s;
`;

const BetAmountInput = ({ value, min, max, onInc, onDec }) => (
    <Input>
        <DecButton onClick={onDec} disabled={value === min} />
        <span>{parseFloat(value || 0).toFixed(2)}</span>
        <IncButton onClick={onInc} disabled={value === max} />
        <CaretWrapper>
            <Caret name="caret up" offset={round((value * 100) / max, 3)} />
        </CaretWrapper>
    </Input>
);

const actionHandlers = withHandlers({
    onDec: ({ onChange, value, min: minValue }) => () => {
        const _value = round(parseFloat(value) - 0.05, 3);
        onChange(max([minValue, _value]));
    },
    onInc: ({ onChange, value, max: maxValue }) => () => {
        const _value = round(parseFloat(value) + 0.05, 3);
        onChange(min([maxValue, _value]));
    },
});

export default compose(actionHandlers)(BetAmountInput);
