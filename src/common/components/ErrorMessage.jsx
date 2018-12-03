import styled from 'styled-components';
import { Message } from 'semantic-ui-react';

const ErrorMessage = styled(Message)`
    border: 1px solid #474e67;
    background: #323b56 !important;
    text-align: center;
    box-shadow: none !important;
    font-size: 14px !important;
    font-weight: bold;
    color: #d96974 !important;
`;

export default ErrorMessage;
