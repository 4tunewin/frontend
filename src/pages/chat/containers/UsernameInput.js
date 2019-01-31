import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { withWeb3 } from '../../../lib/web3';
import UsernameInput from '../components/UsernameInput';
import { GET_USER_QUERY } from './Footer';

const REGISTER_USER_MUTATION = gql`
    mutation RegisterUser($input: RegisterUserInput!) {
        registerUser(input: $input) {
            id
            username
        }
    }
`;

const withRegisterUser = graphql(REGISTER_USER_MUTATION, {
    props: ({ mutate, ownProps }) => ({
        onSubmit: username => {
            return mutate({
                variables: {
                    input: {
                        address: ownProps.web3.account,
                        username,
                    },
                },
                update: (store, { data: { registerUser } }) => {
                    try {
                        const data = store.readQuery({
                            query: GET_USER_QUERY,
                            variables: {
                                address: ownProps.web3.account,
                            },
                        });

                        data.user = registerUser;

                        store.writeQuery({
                            query: GET_USER_QUERY,
                            variables: {
                                address: ownProps.web3.account,
                            },
                            data,
                        });
                    } catch (e) {
                        console.error(
                            'Failed to register a new user',
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
    withRegisterUser,
)(UsernameInput);
