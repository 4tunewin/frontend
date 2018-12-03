import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Logo = styled.img`
    text-align: right;
    vertical-align: middle;
    padding-right: 5px;
    margin-bottom: -6px;
    margin-left: -4px;
    width: 45px;
    height: 40px;
`;

const Name = styled.div`
    font-family: 'Helvetica Neue LT Std';
    line-height: 36px;
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
    <Link to="/">
        <Container>
            <Logo src="/images/logo.png" />
            <Name>
                <Text>4tune</Text>
                <Dot />
                <Text>win</Text>
            </Name>
        </Container>
    </Link>
);

export default Brand;
