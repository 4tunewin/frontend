import React from 'react';
import styled from 'styled-components';

import { Dice } from '../../../../common';

const Wrapper = styled.div`
    line-height: 12px;
    margin-left: 5px;
    margin-right: 5px;
`;

const StyledDice = styled(Dice)`
    margin: 2px;
`;

const DiceOption = ({ options }) => (
    <Wrapper>
        {options.map(option => (
            <StyledDice option={option} size={12} radius="2px" />
        ))}
    </Wrapper>
);

export default DiceOption;
