import { all } from 'redux-saga/effects';

import { watchPlaceBetAsync as watchDicePlaceBetAsync } from './dice';

// Combine all sagas for starting them all together
export default function* rootSaga() {
    yield all([watchDicePlaceBetAsync()]);
}
