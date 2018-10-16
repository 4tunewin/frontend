import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';

import { IntlProvider } from 'react-intl';

// Import semantic UI stylesheets
import 'semantic-ui-css/semantic.min.css';

// Add intl provider for each story
addDecorator(story => <IntlProvider>{story()}</IntlProvider>);

// Get all stories that are in stories sub-folder
const req = require.context('../src', true, /\/__stories__\/.*\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
