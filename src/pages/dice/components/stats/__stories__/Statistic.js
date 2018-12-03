import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../../storybook';
import Statistic from '../Statistic';

storiesOf('dice/stats/Statistic', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Statistic />);
