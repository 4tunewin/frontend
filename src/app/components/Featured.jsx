import React from 'react';
import styled from 'styled-components';
import { Grid, Image } from 'semantic-ui-react';

const Wrapper = styled.div`
    text-align: center;
    margin: 40px 0px 40px 0px;
`;

const Title = styled.div`
    font-family: 'Proxima Nova Semibold';
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
`;

const StyledImageGroup = styled(Image.Group)`
    margin-top: 20px !important;
`;

const StyledImage = styled(Image)`
    opacity: 0.5;
`;

const Featured = () => (
    <Wrapper>
        <Title>FEATURED ON</Title>
        <StyledImageGroup>
            <a
                href="https://www.stateofthedapps.com/dapps/4tune"
                target="_blank"
            >
                <StyledImage src="images/featured/stateofdapps.png" />
            </a>
        </StyledImageGroup>
    </Wrapper>
);

export default Featured;
