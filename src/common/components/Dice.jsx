import styled from 'styled-components';

// Map numbers to dice names
const options = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
};

const Dice = styled.div`
    background: ${({ option }) =>
        `url('images/dice/${options[option] || option}.svg')`};
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background-color: ${({ color }) => color};
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
