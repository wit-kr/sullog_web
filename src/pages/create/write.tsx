/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
import Write, { WriteProps } from '@components/domain/create/wrtie';
import Container from '@components/layout/styles';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../_app';

const WritePage: NextPageWithLayout = () => {
  const router = useRouter();
  const params = router.query;

  if (Object.keys(params).length === 0) {
    return <div />;
  }

  return (
    <Container>
      <Write {...(params as unknown as WriteProps)} />
    </Container>
  );
};

WritePage.requireAuth = true;

export default WritePage;
