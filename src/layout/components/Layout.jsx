import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { ReduxProvider } from '../../providers';
import { DicePage } from '../../pages';
import Navigation from './Navigation';

const StyledContainer = styled(Container)`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Layout = () => (
    <ReduxProvider>
        <StyledContainer>
            <Navigation />
            <Router>
                <Route path="/" component={DicePage} />
            </Router>
        </StyledContainer>
    </ReduxProvider>
);

export default Layout;
