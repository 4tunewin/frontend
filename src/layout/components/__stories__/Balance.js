import React from 'react';
import { storiesOf } from '@storybook/react';

import Balance from '../Balance';
import { CenteredContent } from '../../../storybook';

storiesOf('layout/Balance', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Balance amount={123.45678} />);
