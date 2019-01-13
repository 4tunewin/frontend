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
    width: 36px;
    height: 36px;
    border-radius: 3px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.22) !important;
`;

const Name = styled.div`
    font-family: 'Helvetica Neue LT Std';
    line-height: 36px;
    margin-left: 10px;
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
