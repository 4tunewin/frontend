import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../../storybook';
import TotalAmount from '../TotalAmount';

storiesOf('dice/stats/TotalAmount', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <TotalAmount bets={3265} />)
    .add('empty', () => <TotalAmount />);
