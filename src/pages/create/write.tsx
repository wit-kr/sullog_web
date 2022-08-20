import Write from '@components/domain/create/wrtie';
import Container from '@components/layout/styles';
import { NextPageWithLayout } from '../_app';

const WritePage: NextPageWithLayout = () => (
  <Container>
    <Write />
  </Container>
);

WritePage.requireAuth = true;

export default WritePage;
