import React from 'react';
import styled from 'styled-components';

import { HashAvatar } from '../../../common';

const StyledAvatar = styled(HashAvatar)`
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    padding: 5px;
`;

const Avatar = ({ address }) => (
    <StyledAvatar
        hash={address}
        size={48}
        options={{
            foreground: [255, 255, 255, 255],
            background: [0, 0, 0, 0],
            margin: 0,
        }}
    />
);

export default Avatar;
