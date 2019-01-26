/**
 * Trigger onPress callback while moused is pressed down
 * on the component.
 */
import React, { Component } from 'react';

const ACTION_BUTTON_DELAY = 200;

class HoldButton extends Component {
    state = {
        isPressed: false,
    };

    _cycle = 1;

    _setTimeout = () => {
        return setTimeout(() => {
            this._cycle += 1;

            if (this.props.onPress) {
                this.props.onPress(this._cycle);
            }

            if (this.state.isPressed) {
                this._timeout = this._setTimeout();
            }
        }, this.props.delay || ACTION_BUTTON_DELAY);
    };

    _handleMouseDown = () => {
        this.setState({ isPressed: true }, () => {
            this._timeout = this._setTimeout();
        });
    };

    _handleMouseUp = () => {
        clearTimeout(this._timeout);
        this.setState({ isPressed: false });

        if (this.props.onPress) {
            this.props.onPress(this._cycle);
        }

        this._cycle = 1;
    };

    render() {
        return (
            <div
                onMouseDown={this._handleMouseDown}
                onMouseUp={this._handleMouseUp}
                {...this.props}
            />
        );
    }
}

export default HoldButton;
