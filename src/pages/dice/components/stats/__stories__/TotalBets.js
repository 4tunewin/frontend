import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../../storybook';
import TotalBets from '../TotalBets';

storiesOf('dice/stats/TotalBets', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <TotalBets bets={3265} />)
    .add('empty', () => <TotalBets />);
