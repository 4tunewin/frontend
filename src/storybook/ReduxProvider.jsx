import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

export default function Provider({ store, story }) {
    return (
        <ReduxProvider store={createStore(combineReducers(store))}>
            {story}
        </ReduxProvider>
    );
}
