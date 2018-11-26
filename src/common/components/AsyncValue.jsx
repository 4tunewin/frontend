/**
 * Renders data that loads asynchronous
 */
import { Component } from 'react';

class AsyncValue extends Component {
    state = {
        fetchDataResult: null,
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
            this.setState({ fetchDataResult: result });
        });
    }

    render() {
        const { timeout, fetchDataResult } = this.state;
        const { children, fallback, placeholder } = this.props;

        const value = timeout ? fallback : fetchDataResult || placeholder;

        if (children) {
            return children({ value });
        } else {
            return value;
        }
    }
}

export default AsyncValue;
