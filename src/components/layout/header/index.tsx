import {
  Container,
  HamburgerButton,
  Hamburger,
  Title,
} from '@components/layout/header/styles';
import SearchBox from '@components/shared/searchBox';

const Header = () => (
  <Container>
    <Title src="/image/title.svg" />
    <HamburgerButton>
      <Hamburger src="/image/icon/hamburger.svg" />
    </HamburgerButton>
    <SearchBox />
  </Container>
);

export default Header;
