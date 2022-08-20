import Search from '@components/domain/search';
import { NextPageWithLayout } from './_app';

const SearchPage: NextPageWithLayout = () => <Search />;

SearchPage.requireAuth = true;

export default SearchPage;
