import { all } from 'redux-saga/effects';

import { watchPlaceBidAsync as watchDicePlaceBidAsync } from './dice';

// Combine all sagas for starting them all together
export default function* rootSaga() {
    yield all([watchDicePlaceBidAsync()]);
}
