import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Logo = styled.img`
    text-align: right;
    vertical-align: middle;
    padding-right: 5px;
    margin-bottom: -6px;
`;

const Name = styled.div`
    margin-top: 6px;
`;

const Dot = styled.span`
    &::after {
        content: '.';
        color: #db4ba0;
        font-size: 22px;
    }
`;

const Text = styled.span`
    color: #ffffff;
    font-size: 22px;
`;

const Brand = () => (
    <Container>
        <Logo src="/images/logo.png" />
        <Name>
            <Text>4tune</Text>
            <Dot />
            <Text>io</Text>
        </Name>
    </Container>
);

export default Brand;
