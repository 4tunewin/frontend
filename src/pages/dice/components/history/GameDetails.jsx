import React from 'react';
import styled from 'styled-components';
import { Table, Grid } from 'semantic-ui-react';

import BigNumber from 'bignumber.js';
import { fromWei } from 'web3-utils';
import { encodePacked } from '../../../../lib/dice';
import { ExplorerLink } from '../../../../common';

const Row = styled.div`
    display: inline;
    flex-direction: row;
    padding: 3px 0px 3px;
    border-bottom: 1px solid #2e3653;
`;

const TitleCell = styled.div`
    width: 25%;
`;

const ValueCell = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75%;
`;

const Wrapper = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    margin-left: -20px;
    margin-right: -20px;
    padding: 0px 20px 0px 20px;
    background: #182038;

    ${Row} {
        &:last-child {
            border-bottom: 0px !important;
        }
    }
`;

const GameDetails = ({ show, game, outcome }) => (
    <Wrapper show={show}>
        <Row>
            <TitleCell>address</TitleCell>
            <ValueCell>
                <ExplorerLink address={game.bet.gambler} />
            </ValueCell>
        </Row>
        <Row>
            <TitleCell>bet</TitleCell>
            <ValueCell>{fromWei(game.bet.amount, 'ether')} ETH</ValueCell>
        </Row>
        <Row>
            <TitleCell>bet on</TitleCell>
            <ValueCell>{outcome.bets.join(', ')}</ValueCell>
        </Row>
        <Row>
            <TitleCell>bet trx</TitleCell>
            <ValueCell>
                <ExplorerLink address={game.bet.transactionHash} />
            </ValueCell>
        </Row>
        <Row>
            <TitleCell>sha3(secret)</TitleCell>
            <ValueCell>{game.bet.commit}</ValueCell>
        </Row>
        <Row>
            <TitleCell>secret</TitleCell>
            <ValueCell>{game.reveal.secret}</ValueCell>
        </Row>
        <Row>
            <TitleCell>sha3(bet block)</TitleCell>
            <ValueCell>0x{encodePacked([game.bet.blockNumber])}</ValueCell>
        </Row>
        <Row>
            <TitleCell>sha3(blk + secret)</TitleCell>
            <ValueCell>
                0x
                {encodePacked([game.reveal.secret, game.bet.blockNumber])}
            </ValueCell>
        </Row>
        <Row>
            <TitleCell>sha3 mod 6</TitleCell>
            <ValueCell>
                {new BigNumber(
                    '0x' +
                        encodePacked([
                            game.reveal.secret,
                            game.bet.blockNumber,
                        ]),
                )
                    .modulo(6)
                    .toString()}
            </ValueCell>
        </Row>
        <Row>
            <TitleCell>jackpot</TitleCell>
            <ValueCell>{outcome.jackpot}</ValueCell>
        </Row>
        <Row>
            <TitleCell>wins</TitleCell>
            <ValueCell>
                {fromWei(
                    new BigNumber(game.payment, 10)
                        .plus(game.jackpotPayment || 0, 10)
                        .toString(),
                    'ether',
                )}{' '}
                ETH
            </ValueCell>
        </Row>
    </Wrapper>
);

export default GameDetails;
