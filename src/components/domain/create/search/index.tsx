/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import SearchInputBox from '@components/shared/searchInputBox';
import { useSearchAlcohols } from 'hooks/useSearchAlcohols';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Search = () => {
  const router = useRouter();

  const searchAlcohols = useSearchAlcohols();

  console.log(searchAlcohols);

  return (
    <SearchContainer>
      <NavigationHeader
        canGoBack
        title="검색"
        headerRight={{
          label: '다음',
          onClick: () => router.push('/create/write'),
        }}
      />
      <SearchInputBox
        onSubmit={(text: string) => {}}
        placeholder="마신 술 이름을 입력해주세요."
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  padding: 0 2.2rem;
`;
