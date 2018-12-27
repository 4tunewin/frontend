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

    _handleMouseDown = () => {
        this.setState({ isPressed: true }, () => {
            this._interval = setInterval(() => {
                if (this.state.isPressed && this.props.onPress) {
                    this.props.onPress();
                }
            }, this.props.delay || ACTION_BUTTON_DELAY);
        });
    };

    _handleMouseUp = () => {
        clearInterval(this._interval);
        this.setState({ isPressed: false });

        if (this.props.onPress) {
            this.props.onPress();
        }
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
