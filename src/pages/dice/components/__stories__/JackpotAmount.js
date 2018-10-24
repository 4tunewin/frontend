import React from 'react';
import { storiesOf } from '@storybook/react';

import { CenteredContent } from '../../../../storybook';
import JackpotAmount from '../JackpotAmount';
import { MIN_JACKPOT_BET } from '../../../../config/const';

const fetchJackpotAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
};

storiesOf('dice/JackpotAmount', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('without jackpot chance', story => (
        <JackpotAmount
            amount={MIN_JACKPOT_BET - 0.01}
            fetchJackpotAsync={fetchJackpotAsync}
        />
    ))
    .add('with jackpot chance', story => (
        <JackpotAmount
            amount={MIN_JACKPOT_BET}
            fetchJackpotAsync={fetchJackpotAsync}
        />
    ));
