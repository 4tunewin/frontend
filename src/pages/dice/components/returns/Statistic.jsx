import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const Statistic = styled.div`
    display: flex;
    flex-direction: row;
`;

Statistic.Image = styled(Image)`
    margin-right: 10px;
`;

Statistic.Label = styled.div`
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
`;

Statistic.Value = styled.div`
    color: #ffffff;
    font-size: 42px;
    line-height: 42px;
    margin-top: 2px;
`;

Statistic.Left = styled.div``;
Statistic.Right = styled.div``;

export default Statistic;
