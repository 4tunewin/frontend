import React from 'react';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

import Brand from './Brand';
import Slogan from './Slogan';
import SocialButtons from './SocialButtons';
import Balance from '../containers/Balance';
import Language from '../containers/Language';

const StyledMenu = styled(Menu)`
    padding: 25px 40px 25px 40px;
    margin-bottom: 0px !important;
`;

const DividedItem = styled(Menu.Item)`
    ${({ last }) =>
        !last &&
        `
            &::after {
                content: ' ';
                width: 1px;
                position: absolute;
                background: #ffffff !important;
                right: -5px;
                top: 5px;
                bottom: 5px;
                opacity: 0.1;
        }
    `}
`;

const Header = () => (
    <StyledMenu secondary>
        <Menu.Item fitted>
            <Brand />
        </Menu.Item>
        <Menu.Item>
            <Slogan>Multiply your ether™</Slogan>
        </Menu.Item>
        <Menu.Menu position="right">
            <DividedItem>
                <Balance />
            </DividedItem>
            <DividedItem>
                <Language />
            </DividedItem>
            <DividedItem fitted last>
                <SocialButtons />
            </DividedItem>
        </Menu.Menu>
    </StyledMenu>
);

export default Header;
