import React from 'react';
import { Header } from 'semantic-ui-react';

const TermsPage = () => (
    <div>
        <Header as="h2">Terms of service</Header>
        <p>
            The web site of 4tune.win ("we") provides interface to the{' '}
            <a
                href="https://en.wikipedia.org/wiki/Ethereum#Smart_contracts"
                target="_blank"
                rel="noopener noreferrer"
            >
                Smart Contract
            </a>{' '}
            on the Ethereum blockchain, which accepts ETH tokens and transfers
            varying amounts of ETH tokens in return, depending on external
            factors.
        </p>
        <p>
            We are not able to verify the legality of the service in each
            jurisdiction and provide you with any legal advice. It is your sole
            responsibility to comply with any relevant laws, policies and
            regulations of your jurisdiction regarding the use of ETH tokens in
            the way described above.
        </p>
        <p>
            Playing the games offered by the{' '}
            <a
                href="https://en.wikipedia.org/wiki/Ethereum#Smart_contracts"
                target="_blank"
                rel="noopener noreferrer"
            >
                Smart Contract
            </a>{' '}
            can lead to obtainment or loss of ETH tokens. We do not hold any
            responsibility for the results of the games we provide.
        </p>
        <p>
            We reserve the right to modify the website and its services and
            these terms without any prior notice. We advise to check for updates
            on regular basis.
        </p>
    </div>
);

export default TermsPage;
