import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withProps, lifecycle } from 'recompose';
import { get } from 'lodash';

import Statistic from '../../components/stats/Statistic';

const STATS_FRAGMENT = gql`
    fragment stats on Stats {
        wagers {
            bets
            amount
        }
        jackpotWinner {
            beneficiary
            amount
            transactionHash
        }
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
