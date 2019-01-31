import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Proxima Nova Semibold';
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
`;

const EmptyMessage = () => (
    <Wrapper>There are no messages yet, be the first!</Wrapper>
);

export default EmptyMessage;
