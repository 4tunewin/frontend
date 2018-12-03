import styled from 'styled-components';

// Map numbers to dice names
const OPTIONS = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
};

const Dice = styled.div`
    background: ${({ option, color }) =>
        `url('images/dice/${OPTIONS[option] || option}.svg'), ${color}`};
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: ${({ radius }) => radius};
    display: inline-block;
    margin: 3px;
`;

Dice.defaultProps = {
    size: 36,
    color: '#FFFFFF',
    radius: '10%',
};

export default Dice;
