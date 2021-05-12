import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    overflow-y: auto;
    -webkit-font-smoothing: antialiased;
  }
`;
