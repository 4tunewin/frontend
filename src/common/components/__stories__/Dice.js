import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../storybook';

import Dice from '../Dice';

storiesOf('common/Dice', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('one', () => <Dice option="one" />)
    .add('one large', () => <Dice option="one" size={200} />);
