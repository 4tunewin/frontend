import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import MessagesList from '../components/MessagesList';

const GET_MESSAGES_QUERY = gql`
    query Messages {
        messages {
            id
            author {
                username
            }
            message
            createdAt
        }
    }
`;

const withMessages = graphql(GET_MESSAGES_QUERY, {
    props: ({ data }) => data,
});

export default compose(withMessages)(MessagesList);
