/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import '@public/fonts/style.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>sullog</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default MyApp;
