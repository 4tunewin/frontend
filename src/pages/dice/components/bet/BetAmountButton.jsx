import styled from 'styled-components';

const BetAmountButton = styled.div`
    background: ${({ active }) => (active ? '#a256eb' : '#323b56')};
    color: #ffffff;
    font-size: 14px;
    border-radius: 3px;
    padding: 5px;
    text-align: center;
    cursor: pointer;

    transition: background 0.5s;
`;

export default BetAmountButton;
