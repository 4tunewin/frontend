import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../storybook';

import Tab from '../Tab';

storiesOf('common/Tab', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <Tab>
            <Tab.Item active>Item 1</Tab.Item>
            <Tab.Item>Item 2</Tab.Item>
            <Tab.Item>Item 3</Tab.Item>
        </Tab>
    ));
