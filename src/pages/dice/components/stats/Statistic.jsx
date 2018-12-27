import React from 'react';
import styled from 'styled-components';
import { get } from 'lodash';

import RecentJackpot from './RecentJackpot';
import TotalAmount from './TotalAmount';
import TotalBets from './TotalBets';

const Item = styled.div`
    border-bottom: 1px solid #2e3653;
    padding: 20px 0px 20px 0px;
`;

const Container = styled.div`
    background: #27304d;
    border-radius: 10px;
    padding: 20px;

    ${Item}:first-child {
        padding-top: 0px;
    }

    ${Item}:last-child {
        border-bottom: 0px;
        padding-bottom: 0px;
    }
`;

const Statistic = ({ stats }) => (
    <Container>
        <Item>
            <RecentJackpot jackpot={get(stats, 'jackpotWinner')} />
        </Item>
        <Item>
            <TotalBets bets={get(stats, 'wagers.bets')} />
        </Item>
        <Item>
            <TotalAmount amount={get(stats, 'wagers.amount')} />
        </Item>
    </Container>
);

export default Statistic;
