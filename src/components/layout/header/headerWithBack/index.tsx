import {
  Container,
  BackButton,
  BackButtonIcon,
  HamburgerButton,
  Hamburger,
  Title,
} from '@components/layout/header/headerWithBack/styles';
import SearchBox from '@components/shared/searchBox';

const HeaderWithBack = () => (
  <Container>
    <BackButton>
      <BackButtonIcon src="/image/icon/back.svg" />
    </BackButton>
    <Title src="/image/title.svg" />
    <HamburgerButton>
      <Hamburger src="/image/icon/hamburger.svg" />
    </HamburgerButton>
    <SearchBox />
  </Container>
);

export default HeaderWithBack;
