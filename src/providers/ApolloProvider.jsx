/**
 * Setup apollo client and provider
 */

import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';

import config from '../config';

const PROTOCOL = window.location.protocol;

// Create an http link
const httpLink = new HttpLink({
    uri: `${PROTOCOL}//${config.graphql.uri}`,
});

// Create a WebSocket link
const wsLink = new WebSocketLink({
    uri: `${PROTOCOL === 'https:' ? 'wss' : 'ws'}://${
        config.graphql.uri
    }/graphql`,
    options: {
        reconnect: true,
    },
});

// Using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

// Setup in-memory caching
const cache = new InMemoryCache({
    dataIdFromObject: o => o.id,
});

// Init apollo client
export const client = new ApolloClient({ link, cache });

// Init apollo provider with defined client
export default props => <ApolloProvider client={client} {...props} />;
