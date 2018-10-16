import React from 'react';
import { storiesOf } from '@storybook/react';

import { Map } from 'immutable';
import { ReduxProvider } from '../../../storybook';
import Navigation from '../Navigation';

storiesOf('layout/Navigation', module)
    .addDecorator(story => (
        <ReduxProvider
            story={story()}
            store={{ user: () => new Map({ locale: 'en' }) }}
        />
    ))
    .add('default', () => <Navigation />);
