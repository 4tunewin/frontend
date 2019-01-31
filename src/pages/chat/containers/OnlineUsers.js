import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, lifecycle } from 'recompose';
import { get } from 'lodash';

import Statistic from '../components/OnlineUsers';

const STATS_FRAGMENT = gql`
    fragment stats on Stats {
        online
    }
`;

// Query for games statistics
const STATS_QUERY = gql`
    query Stats {
        stats {
            ...stats
        }
    }

    ${STATS_FRAGMENT}
`;

const STATS_SUBSCRIPTION = gql`
    subscription Stats {
        stats {
            ...stats
        }
    }

    ${STATS_FRAGMENT}
`;

const withData = graphql(STATS_QUERY, {
    props: ({ data: { stats, loading, subscribeToMore } }) => ({
        loading,
        stats,
        online: get(stats, 'online', 0),
        subscribeToMore,
    }),
});

const subscribeToStats = subscribeToMore =>
    subscribeToMore({
        document: STATS_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData) return;

            return Object.assign({}, prev, subscriptionData.data);
        },
    });

const componentDidMount = function() {
    subscribeToStats(this.props.subscribeToMore);
};

export default compose(
    withData,
    lifecycle({ componentDidMount }),
)(Statistic);
