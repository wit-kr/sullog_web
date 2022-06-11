/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import '@public/fonts/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
