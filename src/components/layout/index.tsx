import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import Container from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <Container>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Container>
);

export default Layout;
