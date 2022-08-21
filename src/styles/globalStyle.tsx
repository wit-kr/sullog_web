import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: 62.5%;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }

  body {
    //overflow: hidden;
    background-color: #f1f1f1;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    box-sizing: border-box;
    font-family: 'NotoSansKRRegular', 'MapoFlowerIsland', -apple-system, BlinkMacSystemFont, system-ui, Roboto;
  }

  button {
    all: unset;
  }

  input {
    all: unset;
  }

  @font-face {
    font-family: "MapoFlowerIsland";
    src: url("/fonts/MapoFlowerIsland.otf") format("truetype");
  }

  @font-face {
    font-family: "NotoSansKRRegular";
    src: url("/fonts/NotoSansKR-Regular.otf") format("truetype");
  }

  .mapboxgl-control-container {
    display: none;
  }
`;

export default GlobalStyle;
