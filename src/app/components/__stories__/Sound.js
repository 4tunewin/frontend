import React from 'react';
import { storiesOf } from '@storybook/react';

import { SoundProvider } from '../../../providers';
import { CenteredContent } from '../../../storybook';
import Sound from '../Sound';

storiesOf('layout/Sound', module)
    .addDecorator(story => <SoundProvider>{story()}</SoundProvider>)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Sound />);
