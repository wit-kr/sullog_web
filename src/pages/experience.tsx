import type { NextPage } from 'next';
import Experience from '@components/domain/experience';
import { ReactElement } from 'react';
import Layout from '@components/layout';
import Footer from '@components/layout/footer';
import { NextPageWithLayout } from './_app';

const ExperiencePage: NextPage = () => (
  <>
    <Experience />
    <Footer />
  </>
);

export default ExperiencePage;
