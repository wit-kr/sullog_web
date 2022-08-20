/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Search = () => {
  const router = useRouter();

  return (
    <SearchContainer>
      <NavigationHeader canGoBack title="게시글" />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div``;
