/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useSearchAlcohols } from 'hooks/useSearchAlcohols';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchInputBox from './SearchBar';
import { useSearchAllExp } from '../../../../hooks/useSearchAllExp';

const Search = () => {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState('');

  const searchAlcohols = useSearchAlcohols({
    pageNum: 1,
    pageSize: 10,
    keyword: searchKeyword,
    options: { enabled: false },
  });

  useEffect(() => {
    if (searchKeyword) searchAlcohols.refetch();
  }, [searchKeyword]);

  const onSubmit = (text: string) => {
    setSearchKeyword(text);
  };

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
        onSubmit={onSubmit}
        placeholder="마신 술 이름을 입력해주세요."
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  padding: 0 2.2rem;
`;
