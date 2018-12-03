import { Map } from 'immutable';

const initialState = new Map({
    locale: 'en',
});

export default (state = initialState, action) => {
    switch (action.type) {
        // Set a new locale to switch localization
        case 'USER.SET_LOCALE':
            return state.set('locale', action.locale);
        default: {
            return state;
        }
    }
};
