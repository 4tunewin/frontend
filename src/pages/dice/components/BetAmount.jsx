import React from 'react';
import { map } from 'lodash';
import { Button, Input, Grid } from 'semantic-ui-react';

// List of possible bet options
const options = [0.05, 0.1, 0.15, 'max'];

const BetAmountOption = ({ option, active, onClick }) => (
    <Button
        type="button"
        color={active ? 'green' : 'violet'}
        onClick={() => {
            onClick(option);
        }}
    >
        {option}
    </Button>
);

const BetAmount = ({ input: { value, onChange } }) => (
    <Grid>
        <Grid.Row columns={4}>
            {map(options, (option, idx) => (
                <Grid.Column key={idx}>
                    <BetAmountOption
                        option={option}
                        active={value === option}
                        onClick={onChange}
                    />
                </Grid.Column>
            ))}
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Input size="large" value={value} onChange={onChange} fluid />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default BetAmount;
