/* eslint-disable react/require-default-props */
import React, { Dispatch, SetStateAction } from 'react';
import Container from '@components/layout/styles';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import Slider from '@components/layout/slider';
import { Experience } from 'types/sullog.interface';

type LayoutProps = {
  children: React.ReactNode;
  records?: Experience[];
  manufacturerState?: {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
  };
};

const Layout = ({ children, records, manufacturerState }: LayoutProps) => {
  const router = useRouter();
  if (router?.pathname === '/explore') {
    return (
      <Container>
        <NavigationHeader canGoBack titleImage="/image/feedTitle.svg" />
        {children}
        <Footer />
      </Container>
    );
  }
  if (router?.pathname === '/myExperiences') {
    return (
      <Container>
        <NavigationHeader canGoBack titleImage="/image/title.svg" />
        {children}
        <Footer />
      </Container>
    );
  }
  return (
    <Container>
      <Header />
      {children}
      {records && manufacturerState ? (
        <Slider records={records} manufacturerState={manufacturerState} />
      ) : null}
      <Footer />
    </Container>
  );
};

export default Layout;
