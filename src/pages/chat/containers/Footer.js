import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { withWeb3 } from '../../../lib/web3';
import Footer from '../components/Footer';

export const GET_USER_QUERY = gql`
    query User($address: String!) {
        user(address: $address) {
            id
            username
        }
    }
`;

const withUser = graphql(GET_USER_QUERY, {
    options: ({ web3 }) => ({
        variables: {
            address: web3.account,
        },
    }),
    props: ({ data }) => data,
});

export default compose(
    withWeb3,
    withUser,
)(Footer);
