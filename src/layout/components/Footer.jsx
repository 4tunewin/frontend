import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Wrapper = styled.div`
    background: #101830;
    padding: 10px 40px 10px 40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const MenuItem = styled(Menu.Item)`
    color: #ffffff !important;
    font-size: 12px;
    opacity: 0.5;
`;

const Footer = () => (
    <Wrapper>
        <Menu secondary>
            <MenuItem fitted>Copyright © 2018 by 4tune.win</MenuItem>
            <Menu.Menu position="right">
                <MenuItem as={Link} className="item" to="/terms">
                    Terms & Conditions
                </MenuItem>
                <MenuItem href="mailto:support@4tune.win" link fitted>
                    Contact Us
                </MenuItem>
            </Menu.Menu>
        </Menu>
    </Wrapper>
);

export default Footer;
