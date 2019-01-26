import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    border-bottom-left-radius: 100%;
    background: #27304d;
    width: 280px;
    height: 280px;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;

    font-size: 18px;
    padding: 10px;
    padding-left: 80px;
    padding-top: 24px;
    padding-right: 20px;
    padding-bottom: 89px;
    opacity: 0.8;
`;

const Text = styled.div`
    margin-top: 20px;
    line-height: 22px;
    font-family: 'Proxima Nova Light';
`;

const StyledImage = styled(Image)`
    width: 80px;
`;

const Content = styled.div`
    transform: rotate(45deg);
`;

const MetamaskHint = () => (
    <Wrapper>
        <Content>
            <StyledImage src="images/metamask.png" inline />
            <Text>
                <FormattedMessage
                    id="common.MetamaskHint.message"
                    defaultMessage="Please check your Metamask and confirm a pending transaction."
                />
            </Text>
        </Content>
    </Wrapper>
);

export default MetamaskHint;
