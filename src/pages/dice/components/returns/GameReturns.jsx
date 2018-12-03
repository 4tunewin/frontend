/**
 * P
 */
import React from 'react';
import styled from 'styled-components';

import WinningChance from '../../containers/returns/WinningChance';
import BetReturns from '../../containers/returns/BetReturns';
import JackpotAmount from '../../containers/returns/JackpotAmount';

const Item = styled.div`
    padding: 20px 0px 20px 0px;
    border-right: 1px solid #394057;
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
`;

const Container = styled.div`
    display: flex;
    margin: 0px -20px -20px -20px;
    padding-left: 14px;
    padding-right: 14px;
    justify-content: center;
    border-top: 1px solid #394057;

    ${Item}:last-child {
        border-right: 0px;
    }
`;

const GameReturns = () => (
    <Container>
        <Item>
            <WinningChance />
        </Item>
        <Item>
            <BetReturns />
        </Item>
        <Item>
            <JackpotAmount />
        </Item>
    </Container>
);

export default GameReturns;
