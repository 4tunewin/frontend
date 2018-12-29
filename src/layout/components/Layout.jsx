import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { DicePage, TermsPage } from '../../pages';
import { Metamask } from './metamask';
import Header from './Header';
import Footer from './Footer';

const StyledContainer = styled(Container)`
    width: 1200px !important;
    border-radius: 10px;
    background: #182038 !important;
    box-shadow: 10px 25px 60px -10px rgba(0, 0, 0, 0.54);
`;

const Content = styled.div`
    padding: 0px 40px 35px 40px;
`;

const Padding = styled.div`
    padding: 40px 0px 30px 0px;
`;

const Layout = () => (
    <Metamask>
        <Padding>
            <StyledContainer>
                <Header />

                <Content>
                    <Route path="/" component={DicePage} exact />
                    <Route path="/terms" component={TermsPage} />
                </Content>

                <Footer />
            </StyledContainer>
        </Padding>
    </Metamask>
);

export default Layout;
