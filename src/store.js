import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as appReducers from './reducers';

const reducers = combineReducers({
    form: formReducer,
    ...appReducers,
});

const store = createStore(
    reducers,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default store;
