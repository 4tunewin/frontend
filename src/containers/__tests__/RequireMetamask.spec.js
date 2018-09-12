import React from 'react';
import { Map } from 'immutable';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import RequireMetamask from '../RequireMetamask';

Enzyme.configure({ adapter: new Adapter() });

describe('RequireMetamask', () => {
    it('requires to install MetaMask', () => {
        const store = createStore(() => ({ user: Map() }));
        const enzymeWrapper = mount(
            <Provider store={store}>
                <RequireMetamask />
            </Provider>,
        );
        expect(enzymeWrapper.text()).toBe('Please install MetaMask');
    });

    it('require to log in to MetaMask', () => {
        window.web3 = {};
        const store = createStore(() => ({ user: Map() }));

        const enzymeWrapper = mount(
            <Provider store={store}>
                <RequireMetamask />
            </Provider>,
        );
        expect(enzymeWrapper.text()).toBe('Log in to MetaMask');
    });

    it('requires to switch network if the ID does not match with config', () => {
        window.web3 = {};
        const store = createStore(() => ({
            user: Map({ accounts: ['123'], network: 2 }),
        }));

        const enzymeWrapper = mount(
            <Provider store={store}>
                <RequireMetamask />
            </Provider>,
        );
        expect(enzymeWrapper.text()).toBe('Change network to "MAIN NET"');
    });

    it('renders wrapped component if all verifications are passed', () => {
        window.web3 = {};
        const store = createStore(() => ({
            user: Map({ accounts: ['123'], network: 3 }),
        }));

        const enzymeWrapper = mount(
            <Provider store={store}>
                <RequireMetamask>Success</RequireMetamask>
            </Provider>,
        );
        expect(enzymeWrapper.text()).toBe('Success');
    });
});
