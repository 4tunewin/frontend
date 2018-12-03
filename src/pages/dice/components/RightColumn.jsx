import React from 'react';
import styled from 'styled-components';

import GameHistory from '../containers/history/GameHistory';
import Statistic from './stats/Statistic';

const Wrapper = styled.div`
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;

    & > div:first-child {
        flex: 1 1 auto;
        display: flex;
        padding-bottom: 28px;
    }

    & > div:last-child {
        flex: 0 0 auto;
    }
`;

const RightColumn = () => (
    <Wrapper columns={1}>
        <div>
            <GameHistory />
        </div>
        <div>
            <Statistic />
        </div>
    </Wrapper>
);

export default RightColumn;
