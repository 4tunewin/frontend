import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Wrapper = styled.div`
    background: #101830;
    padding: 10px 40px 10px 40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 40px;
`;

const MenuItem = styled(Menu.Item)`
    color: #ffffff !important;
    font-size: 12px;
    opacity: 0.5;
`;

const Footer = () => (
    <Wrapper>
        <Menu secondary>
            <MenuItem fitted>
                <FormattedMessage
                    id="app.Footer.copyright"
                    defaultMessage="Copyright © {year} by 4tune.win"
                    values={{
                        year: 2018,
                    }}
                />
            </MenuItem>
            <Menu.Menu position="right">
                <MenuItem as={Link} className="item" to="/terms">
                    <FormattedMessage
                        id="app.Footer.terms"
                        defaultMessage="Terms & Conditions"
                    />
                </MenuItem>
                <MenuItem href="mailto:support@4tune.win" link fitted>
                    <FormattedMessage
                        id="app.Footer.contact"
                        defaultMessage="Contact Us"
                    />
                </MenuItem>
            </Menu.Menu>
        </Menu>
    </Wrapper>
);

export default Footer;
