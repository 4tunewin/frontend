import React from 'react';
import styled from 'styled-components';

const Tab = styled.div`
    display: flex;
`;

Tab.Item = styled.a`
    font-size: 14px;
    color: rgba(255, 255, 255, ${({ active }) => (active ? 1 : 0.5)});
    font-weight: 700;
    padding: 15px;
    min-width: 100px;
    position: relative;
    transition: color 0.8s;

    ${({ active }) => !active && `cursor: pointer`}

    &:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 3px;

        ${({ active }) =>
            active &&
            `
                background-image: linear-gradient(
                125deg,
                rgb(128, 102, 255) 0%,
                rgb(213, 61, 205) 100%
            );
        `}
    }

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

export default Tab;
