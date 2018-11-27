import React from 'react';
import styled from 'styled-components';

import { Dice } from '../../../../common';

const StyledDice = styled(Dice)`
    background-color: #ffffff;
    opacity: ${({ active }) => (active ? 1 : 0.15)};
    cursor: pointer;

    transition: opacity 0.5s;
`;

export default StyledDice;
