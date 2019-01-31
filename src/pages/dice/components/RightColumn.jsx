import React from 'react';
import styled from 'styled-components';

import GameHistory from '../containers/history/GameHistory';
import Statistic from '../containers/stats/Statistic';
import ChatPage from '../../chat/components/ChatPage';

const Wrapper = styled.div`
    height: 100%;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
`;

const RightColumn = () => (
    <Wrapper columns={1}>
        <ChatPage />
    </Wrapper>
);

export default RightColumn;
