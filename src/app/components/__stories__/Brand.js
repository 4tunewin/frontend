import React from 'react';
import { storiesOf } from '@storybook/react';

import Brand from '../Brand';
import { CenteredContent } from '../../../storybook';

storiesOf('layout/Brand', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Brand />);
