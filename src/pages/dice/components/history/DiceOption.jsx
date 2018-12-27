import React from 'react';
import styled from 'styled-components';

import { Dice } from '../../../../common';

const Wrapper = styled.div`
    line-height: 11px;
    margin-left: ${({ left }) => (left ? 0 : 5)}px;
    margin-right: 5px;
`;

const StyledDice = styled(Dice)`
    margin: 1px;
`;

const DiceOption = ({ options, highlight, left }) => (
    <Wrapper left={left}>
        {options.map(option => (
            <StyledDice
                key={option}
                option={option}
                size={11}
                radius="2px"
                color={
                    highlight
                        ? 'linear-gradient(45deg, #62fd9e, #168aa3)'
                        : '#FFFFFF'
                }
            />
        ))}
    </Wrapper>
);

export default DiceOption;
