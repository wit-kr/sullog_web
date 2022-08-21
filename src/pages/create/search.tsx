import Search from '@components/domain/create/search';
import Container from '@components/layout/styles';
import { NextPageWithLayout } from '../_app';

const SearchPage: NextPageWithLayout = () => (
  <Container>
    <Search />
  </Container>
);

SearchPage.requireAuth = true;

export default SearchPage;
