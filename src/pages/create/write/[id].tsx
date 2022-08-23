import Write from '@components/domain/create/wrtie';
import Container from '@components/layout/styles';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../../_app';

const WritePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Write />
    </Container>
  );
};

WritePage.requireAuth = true;

export default WritePage;
