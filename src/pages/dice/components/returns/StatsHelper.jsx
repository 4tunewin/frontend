import styled from 'styled-components';

import { Statistic } from '../../../../common';

const StatsHelper = { ...Statistic };

StatsHelper.Label = styled(Statistic.Label)`
    font-family: 'Proxima Nova Semibold';
    text-transform: uppercase;
    font-weight: 700;
`;

export default StatsHelper;
