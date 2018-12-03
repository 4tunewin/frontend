import React from 'react';
import styled from 'styled-components';

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

const JackpotAmount = ({ amount, fetchJackpotAsync }) => (
    <Wrapper>
        <StatsHelper>
            <StatsHelper.Left>
                <StatsHelper.Image src="images/returns/jackpot.png" />
            </StatsHelper.Left>
            <StatsHelper.Right>
                <StatsHelper.Label>Jackpot</StatsHelper.Label>
                <StatsHelper.Value>
                    <AsyncValue fetch={fetchJackpotAsync} placeholder={0}>
                        {({ value }) => parseFloat(value).toFixed(3)}
                    </AsyncValue>
                    <Eth>ETH</Eth>
                </StatsHelper.Value>
            </StatsHelper.Right>
        </StatsHelper>
        <Note>
            {amount < MIN_JACKPOT_BET ? (
                <span>Bet {MIN_JACKPOT_BET.toFixed(2)} ETH to qualify</span>
            ) : (
                <span>{JACKPOT_CHANCE}% jackpot chance!</span>
            )}
        </Note>
    </Wrapper>
);

export default JackpotAmount;
