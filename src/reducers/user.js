import { Map } from 'immutable';

const initialState = Map();

export default (state = initialState, action) => {
    switch (action.type) {
        // Save web3 accounts
        case 'USER.SAVE_ACCOUNTS':
            return state.set('accounts', action.accounts);
        // Save web3 network ID
        case 'USER.SAVE_NETWORK':
            return state.set('network', action.network);
        default: {
            return state;
        }
    }
};
