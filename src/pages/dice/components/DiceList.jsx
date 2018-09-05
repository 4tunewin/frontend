import React from 'react';
import { Grid } from 'semantic-ui-react';

import DiceItem from './DiceItem';

const DiceList = () => (
    <Grid columns={3}>
        <DiceItem value={1} />
        <DiceItem value={2} />
        <DiceItem value={3} />
        <DiceItem value={4} />
        <DiceItem value={5} />
        <DiceItem value={6} />
    </Grid>
);

export default DiceList;
