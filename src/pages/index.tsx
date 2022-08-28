import Home from '@components/domain/home';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => <Home />;

HomePage.requireAuth = true;

export default HomePage;
