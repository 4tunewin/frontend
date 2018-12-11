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
            <IntlProvider>
                <Web3Provider>
                    <Fragment>
                        <Background />
                        <Fonts />

                        <Router>{children}</Router>
                    </Fragment>
                </Web3Provider>
            </IntlProvider>
        </ReduxProvider>
    </ApolloProvider>
);

const App = () => (
    <Providers>
        <Layout />
    </Providers>
);

export default App;
