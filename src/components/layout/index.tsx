import Navbar from './navbar';
import Container from './styles';

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    <main>{children}</main>
  </Container>
);

export default Layout;
