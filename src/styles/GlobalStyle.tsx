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
  :root {
    --doc-height: 100%;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    height: var(--doc-height);
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'NotoSansKR';
  }
`;

export default GlobalStyle;
