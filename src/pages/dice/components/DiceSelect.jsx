import React from 'react';
import { compose, withHandlers } from 'recompose';
import { range, map, indexOf, without, slice } from 'lodash';
import { Grid, Button } from 'semantic-ui-react';

// Limit number of selected options to specified number
const MAX_SELECTED_OPTIONS = 5;

// List of possible dice options
const options = range(1, 7);

const DiceOption = ({ value, active, onClick }) => (
    <Grid.Column>
        <Button
            onClick={() => onClick(value)}
            active={active}
            type="button"
            color={active ? 'green' : 'teal'}
        >
            {value}
        </Button>
    </Grid.Column>
);

const DiceSelect = ({ input: { value }, onChange }) => (
    <Grid columns={3} textAlign="center">
        {map(options, (option, idx) => (
            <DiceOption
                key={idx}
                value={option}
                active={indexOf(value, option) !== -1}
                onClick={onChange}
            />
        ))}
    </Grid>
);

/**
 * Handle on-change event to add or remove selected dice from the list.
 * If the option is already selected, it will be removed from the list
 * OR will be added if is not in the list.
 *
 * Max number of selected options is limited to MAX_SELECTED_OPTIONS
 */
const withOnChange = withHandlers({
    onChange: ({ input: { value, onChange } }) => option => {
        const inArray = indexOf(value, option) !== -1;
        if (inArray) {
            onChange(without(value, option));
        } else {
            onChange(slice([...value, option], 0, MAX_SELECTED_OPTIONS));
        }
    },
});

export default compose(withOnChange)(DiceSelect);
