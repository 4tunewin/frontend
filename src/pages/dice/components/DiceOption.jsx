import React from 'react';
import styled from 'styled-components';

import { Dice } from '../../../common';

const Wrapper = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;

const DiceOption = ({ options }) => (
    <Wrapper>
        {options.map(option => (
            <Dice option={option} size={12} radius="2px" />
        ))}
    </Wrapper>
);

export default DiceOption;
