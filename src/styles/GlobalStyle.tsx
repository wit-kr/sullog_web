import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* iOS only */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
    font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'NotoSansKR';
  }
`;

export default GlobalStyle;
