import { Container, Icon, Logo } from './styles';

const Navbar = () => (
  <Container>
    <div>
      <Icon src="/image/icon/home.svg" alt="home" />
      <Logo src="/logo.svg" alt="logo" />
      <Icon src="/image/icon/hamburger.svg" alt="hamburger" />
    </div>
  </Container>
);

export default Navbar;
