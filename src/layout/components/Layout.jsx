import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { DicePage, TermsPage } from '../../pages';
import Header from './Header';
import Footer from './Footer';

const Background = createGlobalStyle`
    body {
    }
`;

const StyledContainer = styled(Container)`
    padding-top: 20px;
    padding-bottom: 20px;
    background: #182038 !important;
`;

const Layout = () => (
    <StyledContainer>
        <Background />
        <Header />
        <div>
            <Route path="/" component={DicePage} />
            <Route path="/terms" component={TermsPage} />
        </div>
        <Footer />
    </StyledContainer>
);

export default Layout;
