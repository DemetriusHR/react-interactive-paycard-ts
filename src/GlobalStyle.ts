import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ddeefc;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  * {
      box-sizing: border-box;
      &:focus {
          outline: none;
      }
  }
`;

export default GlobalStyle;
