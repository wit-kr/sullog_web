import React from 'react';
import Container from '@components/layout/styles';
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
