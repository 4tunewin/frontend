import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navigation from './Navigation';
import { DicePage } from '../../pages';

const StyledContainer = styled(Container)`
    padding-top: 20px;
    padding-bottom: 20px;
`;

const Layout = () => (
    <StyledContainer>
        <Navigation />
        <Router>
            <Route path="/" component={DicePage} />
        </Router>
    </StyledContainer>
);

export default Layout;
