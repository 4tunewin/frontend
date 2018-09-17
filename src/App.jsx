import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReduxProvider, Web3Provider, ApolloProvider } from './providers';

import Layout from './layout';

import 'semantic-ui-css/semantic.min.css';

const Providers = ({ children }) => (
    <ApolloProvider>
        <ReduxProvider>
            <Web3Provider>
                <Router>{children}</Router>
            </Web3Provider>
        </ReduxProvider>
    </ApolloProvider>
);

const App = () => (
    <Providers>
        <Layout />
    </Providers>
);

export default App;
