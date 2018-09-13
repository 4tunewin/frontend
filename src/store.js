import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
import sagas from './sagas';

const combinedReducers = combineReducers({
    form: formReducer,
    ...reducers,
});

// Init saga middleware for async callbacks
// https://redux-saga.js.org
const sagaMiddleware = createSagaMiddleware();

// Redux DevTools extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create redux store
const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(sagas);

export default store;
