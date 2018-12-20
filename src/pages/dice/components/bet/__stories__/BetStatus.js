import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenteredContent } from '../../../../../storybook';
import BetStatus from '../BetStatus';

storiesOf('dice/bet/BetStatus', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('start', () => <BetStatus status="START" />)
    .add('success', () => (
        <BetStatus status="SUCCESS" dices={[1, 2, 3, 4, 5]} amount="0.01" />
    ))
    .add('fail', () => <BetStatus status="FAIL" message="Error message" />)
    .add('win', () => (
        <BetStatus
            status="WIN"
            dices={[1, 2, 3, 4, 5]}
            payment="0.011"
            win={2}
            onClose={action('onClose')}
        />
    ))
    .add('loose', () => (
        <BetStatus
            status="LOOSE"
            dices={[1, 2, 3, 4, 5]}
            amount="0.01"
            win={2}
            onClose={action('onClose')}
        />
    ));
