import styled from 'styled-components';

const BetAmountButton = styled.div`
    flex: 1 1 auto;
    margin: 5px;
    background: ${({ active }) => (active ? '#a256eb' : '#323b56')};
    color: #ffffff;
    font-family: 'Proxima Nova Regular';
    font-size: 14px;
    border-radius: 3px;
    padding: 5px;
    text-align: center;
    cursor: pointer;
    user-select: none;

    transition: background 0.5s;
`;

export default BetAmountButton;
