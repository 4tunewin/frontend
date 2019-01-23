import React, { Component } from 'react';
import { Howl } from 'howler';

const { Provider, Consumer } = React.createContext();

class SoundProvider extends Component {
    state = {
        mute: false,
    };

    toggleSound = () => {
        this.setState(({ mute }) => ({
            mute: !mute,
        }));
    };

    playSound = file => {
        if (!this.state.mute) {
            const sound = new Howl({ src: [file] });
            sound.play();
        }
    };

    render() {
        return (
            <Provider
                value={{
                    ...this.state,
                    toggleSound: this.toggleSound,
                    playSound: this.playSound,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

/**
 * Helper provides easy way to chain sound consumer as a function
 */
export const withSound = Component => props => (
    <Consumer>
        {({ mute, toggleSound, playSound }) => (
            <Component
                {...props}
                mute={mute}
                toggleSound={toggleSound}
                playSound={playSound}
            />
        )}
    </Consumer>
);

export { SoundProvider, Consumer as SoundConsumer };
