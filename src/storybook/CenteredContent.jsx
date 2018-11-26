import React from 'react';
import styled from 'styled-components';

const CenteredContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    overflow: auto;
    justify-content: center;
    background: transparent;
`;

export default ({ story }) => <CenteredContent>{story}</CenteredContent>;
