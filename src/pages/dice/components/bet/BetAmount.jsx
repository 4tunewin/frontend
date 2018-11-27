import React from 'react';
import styled from 'styled-components';
import { map, isString } from 'lodash';
import { Grid } from 'semantic-ui-react';

import BetAmountButton from './BetAmountButton';
import BetAmountInput from './BetAmountInput';

// List of possible bet options
const options = [0.05, 0.1, 0.15, 'MAX'];

const formatOption = value => {
    if (isString(value)) {
        return value;
    }

    return parseFloat(value).toFixed(2);
};

const BetAmountOption = ({ option, active, onClick }) => (
    <BetAmountButton
        active={active}
        onClick={() => {
            onClick(option);
        }}
    >
        {option}
    </BetAmountButton>
);

const BetAmount = ({ input: { value, onChange } }) => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <BetAmountInput
                    size="large"
                    value={value}
                    onChange={onChange}
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4}>
            {map(options, (option, idx) => (
                <Grid.Column key={idx}>
                    <BetAmountOption
                        option={formatOption(option)}
                        active={option == value}
                        onClick={onChange}
                    />
                </Grid.Column>
            ))}
        </Grid.Row>
    </Grid>
);

export default BetAmount;
