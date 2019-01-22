import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import { IntlProvider } from 'react-intl';
import { Background } from '../src/storybook';

// Import semantic UI stylesheets
import 'semantic-ui-css/semantic.min.css';
import '../public/fonts.css';

// Add intl provider for each story
addDecorator(story => <IntlProvider>{story()}</IntlProvider>);
addDecorator(story => <Background>{story()}</Background>);

// Get all stories that are in stories sub-folder
const req = require.context('../src', true, /\/__stories__\/.*\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
