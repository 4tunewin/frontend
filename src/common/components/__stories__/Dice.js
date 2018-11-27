import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../storybook';

import Dice from '../Dice';

storiesOf('common/Dice', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('all options', () => (
        <div>
            <Dice option="one" size={150} />
            <Dice option="two" size={150} />
            <Dice option="three" size={150} />
            <Dice option="four" size={150} />
            <Dice option="five" size={150} />
            <Dice option="six" size={150} />
        </div>
    ))
    .add('one', () => <Dice option="one" size={400} />)
    .add('two', () => <Dice option="two" size={400} />)
    .add('three', () => <Dice option="three" size={400} />)
    .add('four', () => <Dice option="four" size={400} />)
    .add('five', () => <Dice option="five" size={400} />)
    .add('six', () => <Dice option="six" size={400} />)
    .add('different size', () => (
        <div>
            <Dice option="one" size={16} />
            <Dice option="two" size={24} />
            <Dice option="three" size={36} />
            <Dice option="four" size={48} />
            <Dice option="five" size={56} />
            <Dice option="six" size={96} />
        </div>
    ));
