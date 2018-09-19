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
        if (this.state.timeout) {
            return this.props.fallback;
        } else {
            return this.state.fetchDataResult || this.props.placeholder;
        }
    }
}

export default AsyncValue;
