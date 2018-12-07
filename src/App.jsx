import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    ReduxProvider,
    Web3Provider,
    ApolloProvider,
    IntlProvider,
} from './providers';

import { Background, Fonts } from './common';
import Layout from './layout';

import 'semantic-ui-css/semantic.min.css';

const Providers = ({ children }) => (
    <ApolloProvider>
        <ReduxProvider>
            <Fragment>
                <Background />
                <Fonts />

                <Web3Provider>
                    <IntlProvider>
                        <Router>{children}</Router>
                    </IntlProvider>
                </Web3Provider>
            </Fragment>
        </ReduxProvider>
    </ApolloProvider>
);

const App = () => (
    <Providers>
        <Layout />
    </Providers>
);

export default App;
