import React from 'react';
import styled from 'styled-components';
import { AsyncValue } from '../../../../common';
import Statistic from './Statistic';

import { MIN_JACKPOT_BET, JACKPOT_CHANCE } from '../../../../config/const';

const Note = styled.div`
    margin-top: 5px;
    color: rgb(92, 249, 163);
`;

const Eth = styled.span`
    font-size: 14px;
    margin-left: 5px;
    font-size: bold;
`;

const JackpotAmount = ({ amount, fetchJackpotAsync }) => (
    <div>
        <Statistic>
            <Statistic.Left>
                <Statistic.Image src="images/returns/jackpot.png" />
            </Statistic.Left>
            <Statistic.Right>
                <Statistic.Label>Jackpot</Statistic.Label>
                <Statistic.Value>
                    <AsyncValue fetch={fetchJackpotAsync} placeholder={0}>
                        {({ value }) => value.toFixed(3)}
                    </AsyncValue>
                    <Eth>ETH</Eth>
                </Statistic.Value>
            </Statistic.Right>
        </Statistic>
        <Note>
            {amount < MIN_JACKPOT_BET ? (
                <span>Bet {MIN_JACKPOT_BET.toFixed(2)} ETH to qualify</span>
            ) : (
                <span>{JACKPOT_CHANCE}% jackpot chance!</span>
            )}
        </Note>
    </div>
);

export default JackpotAmount;
