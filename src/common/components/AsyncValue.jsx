/**
 * Renders data that loads asynchronous
 */
import { Component } from 'react';

class AsyncValue extends Component {
    state = {
        data: null,
        timeout: false,
    };

    componentDidMount() {
        // Setup timeout handler
        if (this.props.timeout) {
            this._timeout = setTimeout(() => {
                this.setState({ timeout: true });
            }, this.props.timeout);
        }

        // Call fetch request
        this.props.fetch().then(result => {
            this.setState({ data: result });
        });

        // Call subscription method if it's provided
        if (this.props.subscribe) {
            this.props.subscribe(data => {
                this.setState({ data });
            });
        }
    }

    componentWillUnmount() {
        if (this.props.unsubscribe) {
            this.props.unsubscribe();
        }
    }

    render() {
        const { timeout, data } = this.state;
        const { children, fallback, placeholder } = this.props;

        const value = timeout ? fallback : data || placeholder;

        if (children) {
            return children({ value });
        } else {
            return value;
        }
    }
}

export default AsyncValue;
