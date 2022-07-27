import React from "react";
import { Container } from "@components/layout/styles";
import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

type LayoutProps = {
  children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>)
}

export default Layout;
