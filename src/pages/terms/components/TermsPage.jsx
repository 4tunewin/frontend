import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Header } from 'semantic-ui-react';

const Container = styled.div`
    color: #ffffff !important;
`;

const PageHeader = styled(Header)`
    color: #ffffff;
    opacity: 0.5;
`;

const TermsPage = () => (
    <Container>
        <PageHeader as="h2">
            <FormattedMessage
                id="pages.terms.TermsPage.header"
                defaultMessage="Terms of service"
            />
        </PageHeader>
        <p>
            <FormattedHTMLMessage
                id="pages.terms.TermsPage.content1"
                defaultMessage='The web site of 4tune.win ("we") provides interface to the
                    <a
                        href="https://en.wikipedia.org/wiki/Ethereum#Smart_contracts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Smart Contract
                        </a>
                        on the Ethereum blockchain, which accepts ETH tokens and
                    transfers varying amounts of ETH tokens in return, depending on
                    external factors.'
            />
        </p>
        <p>
            <FormattedHTMLMessage
                id="pages.terms.TermsPage.content2"
                defaultMessage="We are not able to verify the legality of the service in each
                jurisdiction and provide you with any legal advice. It is your
                sole responsibility to comply with any relevant laws, policies
                and regulations of your jurisdiction regarding the use of ETH
                tokens in the way described above."
            />
        </p>
        <p>
            <FormattedHTMLMessage
                id="pages.terms.TermsPage.content3"
                defaultMessage='Playing the games offered by the
                    <a
                        href="https://en.wikipedia.org/wiki/Ethereum#Smart_contracts"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Smart Contract
                    </a>
                    can lead to obtainment or loss of ETH tokens. We do not hold any
                    responsibility for the results of the games we provide.'
            />
        </p>
        <p>
            <FormattedHTMLMessage
                id="pages.terms.TermsPage.content4"
                defaultMessage="We reserve the right to modify the website and its services and these terms without any prior notice. We advise to check for updates on regular basis."
            />
        </p>
    </Container>
);

export default TermsPage;
