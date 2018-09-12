import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import * as appReducers from './reducers';

const reducers = combineReducers({
    form: formReducer,
    ...appReducers,
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export default store;
