import styled from 'styled-components';
import { Segment, Header } from 'semantic-ui-react';

const Dialog = styled(Segment)`
    border-radius: 10px !important;
    background: #27304d !important;
    padding: 30px !important;
    opacity: 0.8;
`;

Dialog.Header = styled(Header)`
    font-family: 'Proxima Nova Semibold';
    color: #ffffff !important;
`;

Dialog.Body = styled.div`
    margin: 22px 0px 22px 0px;
    line-height: 20px;
`;

export default Dialog;
