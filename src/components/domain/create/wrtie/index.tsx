/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Write = () => {
  const router = useRouter();

  return (
    <WriterContainer>
      <NavigationHeader canGoBack title="게시글" />
    </WriterContainer>
  );
};

export default Write;

const WriterContainer = styled.div``;
