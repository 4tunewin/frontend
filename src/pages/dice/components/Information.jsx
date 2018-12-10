import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { Header, List } from 'semantic-ui-react';

const Wrapper = styled.div`
    color: #ffffff;
    font-size: 12px;
`;

const StyledHeader = styled(Header)`
    font-size: 18px;
`;

const Information = () => (
    <Wrapper>
        <StyledHeader as="h2">
            <FormattedMessage
                id="pages.dice.Information.header"
                defaultMessage="How does it work?"
            />
        </StyledHeader>
        <List bulleted>
            <List.Item>
                <FormattedHTMLMessage
                    id="pages.dice.Information.content1"
                    defaultMessage={`4tune.win picks a secret random number and provides you with its
                    <a
                        href="https://en.wikipedia.org/wiki/Cryptographic_hash_function"
                        target="_blank"
                        rel="noopener noreferrer"
                    >hash</a>.`}
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content2"
                    defaultMessage="You send your bet in Ethereum transaction to our smart contract
                along with the hash from previous step."
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content3"
                    defaultMessage="At this point 4tune.win has already commited to a number, prior
                to you chosing an outcome."
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content4"
                    defaultMessage="Once your transaction is confirmed by the network, the contract
                stores the hash and bet details."
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content5"
                    defaultMessage='Our croupier bot "reveals" the number by sending a bet settling
                transaction.'
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content6"
                    defaultMessage="The contract accepts the transaction if and only if the hash of
                provided number is the same as the stored one."
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content7"
                    defaultMessage="The contract mixes the number and block hash of the bet
                transaction to get a random number."
                />
            </List.Item>
            <List.Item>
                <FormattedMessage
                    id="pages.dice.Information.content8"
                    defaultMessage="The contract decides whether you won or lost and sends you the
                winning amount of Ether."
                />
            </List.Item>
        </List>

        <p>
            <FormattedHTMLMessage
                id="pages.dice.Information.content9"
                defaultMessage={`Can 4tune.win tamper with the results? Nope, as the contract keeps track of secret number's hash, meaning the operator cannot change the number after the bet has been accepted. Mixing the block hash with the numbers makes the result totally random yet disallows miners from crafting winning bets. On the other hand, 4tune.win themselves cannot control bet outcomes either because of block hash component. This is a well-known <a href="https://en.wikipedia.org/wiki/Commitment_scheme" target="_blank" rel="noopener noreferrer">"commitment scheme"</a> which enables 4tune.win to provide gambling-grade random number generation allowing for big bets, jackpots and quick settlements while being fully transparent.`}
            />
        </p>
    </Wrapper>
);

export default Information;
