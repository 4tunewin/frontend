import React from 'react';
import styled from 'styled-components';
import { compose, withHandlers } from 'recompose';
import { range, map, indexOf, without, slice } from 'lodash';
import { Grid, Button } from 'semantic-ui-react';

import Dice from './Dice';

// Limit number of selected options to specified numbers
const MIN_SELECTED_OPTIONS = 1;
const MAX_SELECTED_OPTIONS = 5;

// List of possible dice options
const options = range(1, 7);

const Wrapper = styled.div`
    width: 300px;
`;

const StyledDice = styled(Dice)`
    margin: 0px 10px 10px 10px;
`;

const DiceOption = ({ value, active, onClick }) => (
    <StyledDice
        option={value}
        onClick={() => onClick(value)}
        active={active}
        size={60}
        radius="15%"
    />
);

const DiceSelect = ({ input: { value }, onChange }) => (
    <Wrapper>
        {map(options, (option, idx) => (
            <DiceOption
                key={idx}
                value={option}
                active={indexOf(value, option) !== -1}
                onClick={onChange}
            />
        ))}
    </Wrapper>
);

/**
 * Handle on-change event to add or remove selected dice from the list.
 * If the option is already selected, it will be removed from the list
 * OR will be added if is not in the list.
 *
 * Number of selected options should be between MIN_SELECTED_OPTIONS and MAX_SELECTED_OPTIONS
 */
const withOnChange = withHandlers({
    onChange: ({ input: { value, onChange } }) => option => {
        const inArray = indexOf(value, option) !== -1;
        if (inArray) {
            if (value.length > MIN_SELECTED_OPTIONS) {
                onChange(without(value, option));
            }
        } else {
            onChange(slice([...value, option], 0, MAX_SELECTED_OPTIONS));
        }
    },
});

export default compose(withOnChange)(DiceSelect);
