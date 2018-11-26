import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const SocialButton = styled(Icon)`
    color: rgba(255, 255, 255, 0.5);
    padding: 0px 18px 0px 18px;
    margin: 0px !important;
    font-size: 18px !important;

    transition: color 0.6s;
    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`;

const Wrapper = styled.div`
    margin-right: 5px;

    & ${SocialButton} {
        :first-child {
            padding-left: 0px !important;
        }
    }
`;

const SocialButtons = () => (
    <Wrapper>
        <SocialButton name="telegram plane" />
        <SocialButton name="facebook f" />
        <SocialButton name="linkedin" />
    </Wrapper>
);

export default SocialButtons;
