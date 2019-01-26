import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../storybook';

import MetamaskHint from '../MetamaskHint';

storiesOf('common/MetamaskHint', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <MetamaskHint />);
