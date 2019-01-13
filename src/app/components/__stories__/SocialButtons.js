import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialButtons from '../SocialButtons';
import { CenteredContent } from '../../../storybook';

storiesOf('layout/SocialButtons', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <SocialButtons />);
