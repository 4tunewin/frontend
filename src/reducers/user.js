import { Map } from 'immutable';

const initialState = new Map({
    locale: 'en',
});

export default (state = initialState, action) => {
    switch (action.type) {
        // Save web3 accounts
        case 'USER.SAVE_ACCOUNTS':
            return state.set('accounts', action.accounts);
        // Save web3 network ID
        case 'USER.SAVE_NETWORK':
            return state.set('network', action.network);
        // Set a new locale to switch localization
        case 'USER.SET_LOCALE':
            return state.set('locale', action.locale);
        default: {
            return state;
        }
    }
};
