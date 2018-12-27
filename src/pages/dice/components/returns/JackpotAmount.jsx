import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { AsyncValue } from '../../../../common';
import StatsHelper from './StatsHelper';

import { MIN_JACKPOT_BET, JACKPOT_CHANCE } from '../../../../config/const';

const Wrapper = styled.div`
    display: inline-block;
    text-align: left;
    min-width: 202px;
`;

const Note = styled.div`
    margin-top: 5px;
    margin-left: 60px;
    color: rgb(92, 249, 163);
    font-family: 'Proxima Nova Regular';
`;

const Eth = styled.span`
    font-size: 14px;
    line-height: 14px;
    margin-left: 5px;
    font-weight: bold;
    font-family: 'Proxima Nova Semibold';
`;

const JackpotAmount = ({ amount, fetchJackpotAsync, onSubscribeJackpot }) => (
    <Wrapper>
        <StatsHelper>
            <StatsHelper.Left>
                <StatsHelper.Image src="images/returns/jackpot.png" />
            </StatsHelper.Left>
            <StatsHelper.Right>
                <StatsHelper.Label>
                    <FormattedMessage
                        id="pages.dice.returns.JackpotAmount.label"
                        defaultMessage="Jackpot"
                    />
                </StatsHelper.Label>
                <StatsHelper.Value>
                    <AsyncValue
                        fetch={fetchJackpotAsync}
                        subscribe={onSubscribeJackpot}
                        placeholder={0}
                    >
                        {({ value }) => parseFloat(value).toFixed(3)}
                    </AsyncValue>
                    <Eth>ETH</Eth>
                </StatsHelper.Value>
            </StatsHelper.Right>
        </StatsHelper>
        <Note>
            {amount < MIN_JACKPOT_BET ? (
                <FormattedMessage
                    id="pages.dice.returns.JackpotAmount.minToQualify"
                    defaultMessage="Bet {bet} ETH to qualify"
                    values={{
                        bet: MIN_JACKPOT_BET.toFixed(2),
                    }}
                />
            ) : (
                <FormattedMessage
                    id="pages.dice.returns.JackpotAmount.jackpotChance"
                    defaultMessage="{chance}% jackpot chance!"
                    values={{
                        chance: JACKPOT_CHANCE,
                    }}
                />
            )}
        </Note>
    </Wrapper>
);

export default JackpotAmount;
