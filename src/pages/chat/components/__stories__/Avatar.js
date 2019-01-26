import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import Avatar from '../Avatar';

storiesOf('pages/chat/Avatar', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <Avatar address="0x38947bd14DAa1DE466dfeed4a3eea9Fb7B4647e5" />
    ))
    .add('different', () => (
        <div>
            <Avatar address="0xF734Ca638038a18448afe261cfD9538A37aBbE6F" />
            <Avatar address="0xC104dC60D9f2092dE919604907bCbd293D31D090" />
            <Avatar address="0x102c99501FB049f6B0AAcce9Ed5a8A8119D48522" />
            <Avatar address="0xBb0c70F8cf4E50eDa0896D68917D1ddB51ee9B80" />
            <Avatar address="0x053d0C30dAf17402C5F05575C3d735133aE18403" />
        </div>
    ));
