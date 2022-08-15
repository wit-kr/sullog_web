/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/globalStyle';
import '@public/fonts/style.css';
import Head from 'next/head';
import { NextPage } from 'next';
import { RecoilRoot } from 'recoil';
import { ReactElement, ReactNode } from 'react';
import axios from 'axios';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const instance = axios.create({
  baseURL: 'http://52.78.33.186:8080/sullog/',
});

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="translucent"
        />
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>sullog</title>
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
