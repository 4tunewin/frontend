import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    ReduxProvider,
    Web3Provider,
    ApolloProvider,
    IntlProvider,
} from './providers';

import { Background } from './common';
import Layout from './layout';

import 'semantic-ui-css/semantic.min.css';

const Providers = ({ children }) => (
    <Fragment>
        <Background />

        <ApolloProvider>
            <ReduxProvider>
                <IntlProvider>
                    <Web3Provider>
                        <Router>{children}</Router>
                    </Web3Provider>
                </IntlProvider>
            </ReduxProvider>
        </ApolloProvider>
    </Fragment>
);

const App = () => (
    <Providers>
        <Layout />
    </Providers>
);

export default App;
