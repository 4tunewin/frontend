/**
 * Setup apollo client and provider
 */

import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import config from '../config';

// Init apollo client
export const client = new ApolloClient({
    uri: config.graphql.uri,
});

// Init apollo provider with defined client
export default props => <ApolloProvider client={client} {...props} />;
