import React from 'react';
import { map } from 'lodash';
import { Button, Input, Grid } from 'semantic-ui-react';

// List of possible bet options
const betOptions = [0.05, 0.10, 0.15, 'max'];

const BetAmountOptions = ({ value, onChange }) => (
    <Grid>
        <Grid.Row columns={4}>
            {map(betOptions, option => (
                <Grid.Column>
                    <Button color="violet" onClick={() => onChange(option)}>{option}</Button>
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

export default BetAmountOptions;