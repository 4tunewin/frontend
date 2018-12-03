import styled from 'styled-components';
import { Statistic } from '../../../../common';

const StatsHelper = { ...Statistic };

StatsHelper.Image = styled(Statistic.Image)`
    margin-right: 25px;
`;

StatsHelper.Label = styled(Statistic.Label)`
    font-family: 'Proxima Nova Regular';
`;

StatsHelper.Value = styled(Statistic.Value)`
    align-self: center;
`;

export default StatsHelper;
