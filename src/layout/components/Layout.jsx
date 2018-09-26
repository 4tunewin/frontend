import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { DicePage } from '../../pages';
import Navigation from './Navigation';

const StyledContainer = styled(Container)`
    padding-top: 100px;
    padding-bottom: 20px;
`;

const Layout = () => (
    <StyledContainer>
        {/* <Navigation /> */}
        <div>
            <Route path="/" component={DicePage} />
        </div>
    </StyledContainer>
);

export default Layout;
