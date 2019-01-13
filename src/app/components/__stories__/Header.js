import React from 'react';
import { storiesOf } from '@storybook/react';

import { Map } from 'immutable';
import { ReduxProvider } from '../../../storybook';
import Header from '../Header';

storiesOf('layout/Header', module)
    .addDecorator(story => (
        <ReduxProvider
            story={story()}
            store={{ user: () => new Map({ locale: 'en' }) }}
        />
    ))
    .add('default', () => <Header />);
