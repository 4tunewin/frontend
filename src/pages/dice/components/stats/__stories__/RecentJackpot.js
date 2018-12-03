import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import RecentJackpot from '../RecentJackpot';

storiesOf('dice/stats/RecentJackpot', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <RecentJackpot
            amount={50000000000000000}
            address="0xecae9e2b88976d68e84a3c57a0a171f2e0e45e4c"
        />
    ))
    .add('empty', () => <RecentJackpot />);
