import React from 'react';
import Identicon from 'identicon.js';

const defaultOptions = {
    foreground: [0, 0, 0, 255],
    background: [255, 255, 255, 255],
    margin: 0.1,
    format: 'svg',
};

const HashAvatar = ({ hash, size, options, ...props }) => {
    // Create a base64 encoded SVG
    const data = new Identicon(
        hash,
        Object.assign({ size }, defaultOptions, options),
    ).toString();

    return (
        <img
            src={`data:image/svg+xml;base64,${data}`}
            width={size}
            height={size}
            alt={hash}
            {...props}
        />
    );
};

HashAvatar.defaultProps = {
    size: 25,
};

export default HashAvatar;
