import React from 'react';
import styled from 'styled-components';

import RecentJackpot from '../../containers/stats/RecentJackpot';
import TotalAmount from '../../containers/stats/TotalAmount';
import TotalBets from '../../containers/stats/TotalBets';

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

const Statistic = () => (
    <Container>
        <Item>
            <RecentJackpot />
        </Item>
        <Item>
            <TotalBets />
        </Item>
        <Item>
            <TotalAmount />
        </Item>
    </Container>
);

export default Statistic;
