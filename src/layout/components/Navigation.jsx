import React from 'react';
import { Menu } from 'semantic-ui-react';

import Language from '../containers/Language';

const Navigation = () => (
    <Menu>
        <Menu.Menu position="right">
            <Menu.Item>
                <Language />
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);

export default Navigation;
