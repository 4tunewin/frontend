import React from 'react';
import { storiesOf } from '@storybook/react';
import { CenteredContent } from '../../../../../storybook';
import DiceOption from '../DiceOption';

storiesOf('dice/history/DiceOption', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('single option', () => <DiceOption options={[1]} />)
    .add('multiple option', () => <DiceOption options={[1, 2, 3, 4, 5, 6]} />);
