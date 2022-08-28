import { Container, Title } from '@components/layout/header/styles';
import SearchBox from '@components/shared/searchBox';

const Header = () => (
  <Container>
    <Title src="/image/title.svg" />
    <SearchBox />
  </Container>
);

export default Header;
