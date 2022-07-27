import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  body {
    background-color: #f1f1f1;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    box-sizing: border-box;
    font-family: 'NotoSansKR', -apple-system, BlinkMacSystemFont, system-ui, Roboto;
  }
  button {
    all: unset;
  }
  .button {
    font-family: 'NotoSansKR';
  }
  
  .mapboxgl-control-container {
    display: none;
  }
`;

export default GlobalStyle;
