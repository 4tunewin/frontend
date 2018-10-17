import React from 'react';
import { Menu } from 'semantic-ui-react';

import Balance from '../containers/Balance';
import Language from '../containers/Language';

const Navigation = () => (
    <Menu>
        <Menu.Menu position="right">
            <Menu.Item>
                <Balance />
            </Menu.Item>
            <Menu.Item>
                <Language />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default Navigation;
