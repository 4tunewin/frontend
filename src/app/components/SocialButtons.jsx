import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const SocialButton = styled.a`
    padding: 0px 0px 0px 18px;

    & > i {
        margin: 0px !important;
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px !important;

        transition: color 0.6s;
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
`;

const Wrapper = styled.div`
    & ${SocialButton} {
        :first-child {
            padding-left: 13px !important;
        }
    }
`;

const SocialButtons = () => (
    <Wrapper>
        <SocialButton href="https://t.me/fortunewin" target="_blank">
            <Icon name="telegram plane" />
        </SocialButton>
        <SocialButton href="https://www.facebook.com/4tune.win" target="_blank">
            <Icon name="facebook f" />
        </SocialButton>
        <SocialButton href="https://twitter.com/4tunewin" target="_blank">
            <Icon name="twitter" />
        </SocialButton>
    </Wrapper>
);

export default SocialButtons;
