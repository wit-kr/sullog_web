import { Container, Icon, Logo } from './styles';

const Navbar = () => (
  <Container>
    <div>
      <button type="button">
        <Icon src="/image/icon/home.svg" alt="home" />
      </button>
      <Logo src="/logo.svg" alt="logo" />
      <button type="button">
        <Icon src="/image/icon/hamburger.svg" alt="hamburger" />
      </button>
    </div>
  </Container>
);

export default Navbar;
