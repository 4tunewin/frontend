import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../../storybook';
import WinningChance from '../WinningChance';

storiesOf('dice/returns/WinningChance', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <WinningChance chance={10} />);
