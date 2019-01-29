import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

import UsernameInput from './UsernameInput';
import MessageInput from './MessageInput';

const Wrapper = styled(Segment)`
    flex: 0 0 auto;
    padding: 20px;
    box-shadow: none !important;
    border: 0px !important;
    border-top: 1px solid #182038 !important;
    background: transparent !important;
    border-radius: 0 !important;

    &.loading:before {
        background: rgba(50, 59, 86, 0.8) !important;
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
    }
`;

const Footer = ({ loading, user }) => (
    <Wrapper loading={loading}>
        {user ? <MessageInput /> : <UsernameInput />}
    </Wrapper>
);

export default Footer;
