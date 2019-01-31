import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, lifecycle } from 'recompose';

import { withWeb3 } from '../../../lib/web3';
import MessagesList from '../components/MessagesList';

const MESSAGE_FRAGMENT = gql`
    fragment Message on Message {
        id
        author {
            username
            address
        }
        text
        createdAt
    }
`;

export const GET_MESSAGES_QUERY = gql`
    query Messages {
        messages {
            ...Message
        }
    }

    ${MESSAGE_FRAGMENT}
`;

const MESSAGES_SUBSCRIPTION = gql`
    subscription Messages {
        messages {
            ...Message
        }
    }

    ${MESSAGE_FRAGMENT}
`;

const withMessages = graphql(GET_MESSAGES_QUERY, {
    props: ({ data }) => data,
});

const subscribeToMessages = (subscribeToMore, web3) =>
    subscribeToMore({
        document: MESSAGES_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return;

            const { address } = subscriptionData.data.messages.author;
            if (address === web3.account) {
                return;
            }

            return Object.assign({}, prev, {
                messages: [...prev.messages, subscriptionData.data.messages],
            });
        },
    });

/**
 * Subscribe to new games on component mount
 */
const componentDidMount = function() {
    subscribeToMessages(this.props.subscribeToMore, this.props.web3);
};

export default compose(
    withWeb3,
    withMessages,
    lifecycle({ componentDidMount }),
)(MessagesList);
