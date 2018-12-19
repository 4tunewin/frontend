import { Map } from 'immutable';

const initialState = new Map({
    bet: new Map({ status: 'PENDING' }),
});

export default (state = initialState, action) => {
    switch (action.type) {
        case 'DICE.PLACE_BET_START': {
            return state.set(
                'bet',
                new Map({
                    ...action.payload,
                    status: 'START',
                }),
            );
        }
        // Save error from latest bet placement
        case 'DICE.PLACE_BET_FAIL': {
            return state
                .setIn(['bet', 'status'], 'FAIL')
                .setIn(['bet', 'error'], action.message);
        }
        // Bet was successfully placed
        case 'DICE.PLACE_BET_SUCCESS': {
            return state
                .setIn(['bet', 'status'], 'SUCCESS')
                .setIn(['bet', 'transactionHash'], action.transactionHash);
        }
        // Save filter for game history results
        case 'DICE.FILTER_HISTORY': {
            return state.set('filters', new Map(action.filters));
        }
        default: {
            return state;
        }
    }
};
