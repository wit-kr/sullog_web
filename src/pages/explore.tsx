import Explore from '@components/domain/explore';
import { NextPageWithLayout } from './_app';

const ExplorePage: NextPageWithLayout = () => <Explore />;

ExplorePage.requireAuth = true;

export default ExplorePage;
