import React from "react";
import { Grid } from "semantic-ui-react";

import DiceSelect from "./DiceSelect";
import BetAmount from "./BetAmount";
import BetButton from "./BetButton";

const BetForm = () => (
    <Grid columns={1}>
        <Grid.Column>
            <DiceSelect />
        </Grid.Column>
        <Grid.Column>
            <BetAmount />
        </Grid.Column>
        <Grid.Column>
            <BetButton />
        </Grid.Column>
    </Grid>
);

export default BetForm;
