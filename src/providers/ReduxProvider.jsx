/**
 * Setup redux provider with correct store
 */

import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

const ReduxProvider = props => <Provider store={store} {...props} />;

export default ReduxProvider;
