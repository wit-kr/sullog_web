import React from 'react';
import { Container, PlusButton } from '@components/layout/styles';
import Footer from './footer';
import Navbar from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Navbar />
    <main>{children}</main>
    <PlusButton>
      <img src="/image/icon/plusIcon.svg" alt="plus" />
    </PlusButton>
    <Footer />
  </Container>
);

export default Layout;
