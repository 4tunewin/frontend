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
        // Save results for current bet
        case 'DICE.BET_RESULT': {
            const { payload } = action;

            if (payload.status === 'FAIL') {
                return state
                    .setIn(['bet', 'status'], 'RESULT')
                    .setIn(['bet', 'result'], 'FAIL')
                    .setIn(['bet', 'refunded'], payload.refunded);
            } else {
                return state
                    .setIn(['bet', 'status'], 'RESULT')
                    .setIn(
                        ['bet', 'result'],
                        payload.payment > 0 ? 'WIN' : 'LOOSE',
                    )
                    .setIn(['bet', 'payment'], payload.payment)
                    .setIn(['bet', 'jackpotPayment'], payload.jackpotPayment)
                    .setIn(['bet', 'win'], payload.win)
                    .setIn(['bet', 'jackpot'], payload.jackpot);
            }
        }
        // Set bet to initial state
        case 'DICE.BET_RESET': {
            return state.set('bet', initialState.get('bet'));
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
