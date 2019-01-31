import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import uuid from 'uuid';

import { withWeb3 } from '../../../lib/web3';
import MessageInput from '../components/MessageInput';
import { GET_MESSAGES_QUERY } from './MessagesList';

const SEND_MESSAGE_MUTATION = gql`
    mutation SendMessage($input: SendMessageInput!) {
        sendMessage(input: $input) {
            id
            author {
                username
                address
            }
            text
            createdAt
        }
    }
`;

const withSendMessage = graphql(SEND_MESSAGE_MUTATION, {
    props: ({ mutate, ownProps }) => ({
        onSend: message => {
            return mutate({
                variables: {
                    input: {
                        from: ownProps.web3.account,
                        message,
                    },
                },
                optimisticResponse: {
                    __typename: 'Mutation',
                    sendMessage: {
                        __typename: 'Message',
                        id: uuid.v4(),
                        text: message,
                        author: {
                            __typename: 'User',
                            username: ownProps.user.username,
                            address: ownProps.web3.account,
                        },
                        createdAt: Date.now().toString(),
                    },
                },
                update: (store, { data: { sendMessage } }) => {
                    try {
                        const data = store.readQuery({
                            query: GET_MESSAGES_QUERY,
                        });

                        data.messages.push(sendMessage);

                        store.writeQuery({
                            query: GET_MESSAGES_QUERY,
                            data,
                        });
                    } catch (e) {
                        console.error(
                            'Failed to push a new message in local cache',
                            e.message,
                        );
                    }
                },
            });
        },
    }),
});

export default compose(
    withWeb3,
    withSendMessage,
)(MessageInput);
