import React from 'react';
import styled from 'styled-components';
import { compose, branch, renderComponent } from 'recompose';
import { map, isEmpty } from 'lodash';
import { Loader } from 'semantic-ui-react';

import Message from './Message';
import EmptyMessage from './EmptyMessage';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    padding: 15px 20px 15px 20px;
    max-height: 586px;
`;

class MessagesList extends React.Component {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }

    scrollToBottom = () => {
        this._ref.current.scrollTop = this._ref.current.scrollHeight;
    };

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        const { messages } = this.props;

        return (
            <Wrapper ref={this._ref}>
                {map(messages, message => (
                    <Message key={message.id} message={message} />
                ))}
            </Wrapper>
        );
    }
}

// Show spiner while loading list of messages
const withSpinner = branch(
    ({ loading }) => loading,
    renderComponent(() => <Loader size="large" active />),
);

/**
 * Show message if list of messages is empty
 */
const withEmptyMessage = branch(
    ({ messages }) => isEmpty(messages),
    renderComponent(EmptyMessage),
);

export default compose(
    withSpinner,
    withEmptyMessage,
)(MessagesList);
