import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Map } from 'immutable';
import { ReduxProvider, CenteredContent } from '../../../../../storybook';
import GameHistory from '../GameHistory';
import { history } from '../../__stories__/fixtures';

const Wrapper = styled.div`
    width: 500px;
    height: 300px;
`;

storiesOf('dice/history/GameHistory', module)
    .addDecorator(story => (
        <ReduxProvider
            store={{
                user: () => new Map({ accounts: [1] }),
                dice: () => new Map({}),
            }}
            story={story()}
        />
    ))
    .addDecorator(story => <Wrapper>{story()}</Wrapper>)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <GameHistory history={history} />)
    .add('loading', () => <GameHistory history={history} loading />)
    .add('empty', () => <GameHistory />);
