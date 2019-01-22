import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    ReduxProvider,
    Web3Provider,
    ApolloProvider,
    IntlProvider,
} from '../../providers';
import { Container } from 'semantic-ui-react';

import { Metamask } from './metamask';
import { Background, GoogleAnalytics } from '../../common';
import Header from './Header';
import Footer from './Footer';
import { DicePage, TermsPage } from '../../pages';

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

const Providers = ({ children }) => (
    <Fragment>
        <Background />

        <ApolloProvider>
            <ReduxProvider>
                <IntlProvider>
                    <Web3Provider>
                        <Metamask>
                            <Router>{children}</Router>
                        </Metamask>
                    </Web3Provider>
                </IntlProvider>
            </ReduxProvider>
        </ApolloProvider>
    </Fragment>
);

const App = () => (
    <Providers>
        <Padding>
            <StyledContainer>
                <GoogleAnalytics />

                <Header />

                <Content>
                    <Route path="/" component={DicePage} exact />
                    <Route path="/terms" component={TermsPage} />
                </Content>

                <Footer />
            </StyledContainer>
        </Padding>
    </Providers>
);

export default App;
