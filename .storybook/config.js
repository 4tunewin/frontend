import { configure } from '@storybook/react';

// Import semantic UI stylesheets
import 'semantic-ui-css/semantic.min.css';

// Get all stories that are in stories sub-folder
const req = require.context('../src', true, /\/__stories__\/.*\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
