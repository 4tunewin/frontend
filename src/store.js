import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as appReducers from './reducers';

const reducers = combineReducers({
    form: formReducer,
    ...appReducers,
});

const store = createStore(
    reducers,
    compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

export default store;
