import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import BetReturns from '../BetReturns';

storiesOf('dice/returns/BetReturns', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('with jackpot', () => (
        <BetReturns amount={1} winPays={5.94} winAmount={0.297} />
    ))
    .add('without jackpot', () => (
        <BetReturns amount={0.05} winPays={5.94} winAmount={0.297} />
    ));
