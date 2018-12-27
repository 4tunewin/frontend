import styled from 'styled-components';

const Table = styled.div`
    color: #ffffff;
    font-size: 12px;
    font-family: 'Proxima Nova Regular';
    overflow: hidden;
`;

Table.Cell = styled.div`
    flex: 1 1 auto;
    padding: 5px 0px 5px 0px;
    align-items: center;
    width: ${({ width }) => width};
`;

Table.HeaderCell = styled(Table.Cell)`
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    padding-top: 10px !important;
    padding-bottom: 10px !important;
`;

Table.Row = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    padding: 0px 20px 0px 20px;
`;

Table.Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 380px;
    margin-right: -17px;

    ${Table.Row} {
        &:nth-child(2n) {
            background-color: #2e3653 !important;
        }
    }

    ${Table.Row} {
        &:hover {
            background-color: #3d455f !important;
        }
    }
`;

Table.Header = styled.div`
    background: #323b56;
    font-size: 14px;
    font-family: 'Proxima Nova Semibold';
    border-top: 1px solid #3d455f;
    border-bottom: 1px solid #3d455f;
`;

export default Table;
