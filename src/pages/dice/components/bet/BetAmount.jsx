import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import BetAmountButton from './BetAmountButton';
import BetAmountInput from './BetAmountInput';

// List of possible bet options
const options = [0.05, 0.1, 0.2, 0.5];

const AmountOptions = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px -5px 0px -5px;
`;

const BetAmountOption = ({ option, active, onClick }) => (
    <BetAmountButton
        active={active}
        onClick={() => {
            onClick(option);
        }}
    >
        {parseFloat(option).toFixed(2)}
    </BetAmountButton>
);

const BetAmount = ({ input: { value, onChange } }) => (
    <div>
        <BetAmountInput
            size="large"
            value={value}
            onChange={onChange}
            min={0.05}
            max={0.5}
        />
        <AmountOptions>
            {map(options, (option, idx) => (
                <BetAmountOption
                    key={idx}
                    option={option}
                    active={option === value}
                    onClick={onChange}
                />
            ))}
        </AmountOptions>
    </div>
);

export default BetAmount;
