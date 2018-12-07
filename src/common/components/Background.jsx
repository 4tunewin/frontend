import { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
    body {
        background-color: #323d62 !important;
        background-image: url('images/bkg-pattern.png'), radial-gradient(circle at center, #606a8f, #303b60) !important;
        background-repeat: no-repeat;
        height: auto;
    }
`;

export default Background;
