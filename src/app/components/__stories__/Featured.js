import React from 'react';
import { storiesOf } from '@storybook/react';

import Featured from '../Featured';
import { CenteredContent } from '../../../storybook';

storiesOf('layout/Featured', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Featured />);
