import Footer from './footer';
import Navbar from './navbar';
import Container from './styles';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </Container>
);

export default Layout;
