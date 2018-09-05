import React from 'react';
import { range } from 'lodash';
import { Grid, Button } from 'semantic-ui-react';

const DiceOption = ({ value }) => (
    <Grid.Column>
        <Button color="teal">{value}</Button>
    </Grid.Column>
);

const DiceSelect = () => (
    <Grid columns={3} textAlign="center">
        {range(1, 7).map(value => (
            <DiceOption value={value} />
        ))}
    </Grid>
);

export default DiceSelect;
