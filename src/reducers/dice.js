import { Map } from 'immutable';

const initialState = new Map();

export default (state = initialState, action) => {
    switch (action.type) {
        // Save error from latest bet placement
        case 'DICE.PLACE_BET_FAILED': {
            return state.set('error', action.message);
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
