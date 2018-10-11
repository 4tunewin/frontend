import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    margin-left: 5px;
    margin-right: 5px;
`;

const DiceOption = ({ options }) => <Wrapper>{options.join(';')}</Wrapper>;

export default DiceOption;
