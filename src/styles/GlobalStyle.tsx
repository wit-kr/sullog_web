import { createGlobalStyle } from 'styled-components';

if (typeof window !== 'undefined') {
  const documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
  };

  window.addEventListener('resize', documentHeight);
  documentHeight();
}
const GlobalStyle = createGlobalStyle`
  /* :root {
    --doc-height: 100%;
  } */
  html {
    font-size: 62.5%;
    height: -webkit-fill-available;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
  body {
    margin: 0;
    padding: 0;
    /* min-height: 100vh; */
    /* height: var(--doc-height); */
    min-height: 100vh;
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
    box-sizing: border-box;
    font-family: 'NotoSansKR', -apple-system, BlinkMacSystemFont, system-ui, Roboto;
  }
`;

export default GlobalStyle;
