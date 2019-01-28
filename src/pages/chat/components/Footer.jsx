import React from 'react';
import styled from 'styled-components';

import UsernameInput from './UsernameInput';

const Wrapper = styled.div`
    flex: 0 0 auto;
    padding: 10px;
    border-top: 1px solid #182038;
`;

const Footer = () => (
    <Wrapper>
        <UsernameInput />
    </Wrapper>
);

export default Footer;
