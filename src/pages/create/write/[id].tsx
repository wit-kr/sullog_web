/* eslint-disable radix */
import Write from '@components/domain/create/wrtie';
import Container from '@components/layout/styles';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../_app';

const WritePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Write id={parseInt(id as string)} />
    </Container>
  );
};

WritePage.requireAuth = true;

export default WritePage;
