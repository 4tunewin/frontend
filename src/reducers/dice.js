import { Map } from 'immutable';

const initialState = Map();

export default (state = initialState, action) => {
    switch (action.type) {
        // Save error from latest bet placement
        case 'DICE.PLACE_BET_FAILED': {
            return state.set('error', action.message);
        }
        default: {
            return state;
        }
    }
};
