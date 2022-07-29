import Home from '@components/domain/home';
import Layout from '@components/layout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => <Home />;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
