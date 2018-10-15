import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CeonteredContent, CenteredContent } from '../../../../storybook';
import FilterHistoryButton from '../FilterHistoryButton';

storiesOf('dice/FilterHistoryButton', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <FilterHistoryButton onClick={action('onClick')} />)
    .add('active', () => (
        <FilterHistoryButton onClick={action('onClick')} active />
    ));
