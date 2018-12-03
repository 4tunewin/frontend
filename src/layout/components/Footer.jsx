import React from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const Wrapper = styled.div`
    background: #101830;
    padding: 10px 25px 10px 25px;
    box-shadow: 10px 0px 50px 0px rgba(0, 0, 0, 0.44)};
`;

const MenuItem = styled(Menu.Item)`
    color: #ffffff !important;
    font-size: 12px;
    opacity: 0.5;
`;

const Footer = () => (
    <Wrapper>
        <Menu secondary>
            <MenuItem>Copyright © 2018 by 4tune.win</MenuItem>
            <Menu.Menu position="right">
                <MenuItem link="/terms">Terms & Conditions</MenuItem>
                <MenuItem link="mailto:support@4tune.win">Contact Us</MenuItem>
            </Menu.Menu>
        </Menu>
    </Wrapper>
);

export default Footer;
