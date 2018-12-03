import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, withProps } from 'recompose';
import { get } from 'lodash';

import TotalBets from '../../components/stats/TotalBets';

// Query for games statistics
const STATS_QUERY = gql`
    query Stats {
        stats {
            wagers {
                bets
            }
        }
    }
`;

const withData = graphql(STATS_QUERY, {
    props: ({ data: { stats, loading } }) => ({
        loading,
        stats,
    }),
});

const withBets = withProps(({ stats }) => ({
    bets: get(stats, 'wagers.bets', 0),
}));

export default compose(
    withData,
    withBets,
)(TotalBets);
