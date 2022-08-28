/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useSearchAlcohols } from 'hooks/useSearchAlcohols';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Alcohol from './Alcohol';
import SearchInputBox from './SearchBar';
import { useSearchExpWithKeyword } from '../../../../hooks/useSearchExpWithKeyword';

const Search = () => {
  const router = useRouter();

  const [searchKeyword, setSearchKeyword] = useState('');
  const [pageNum, setPageNum] = useState(1);

  const searchAlcohols = useSearchAlcohols({
    pageNum,
    pageSize: 20,
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
      <NavigationHeader canGoBack title="검색" />
      <SearchInputBox
        onSubmit={onSubmit}
        placeholder="마신 술 이름을 입력해주세요."
      />
      {searchAlcohols.data ? (
        <SearchResultContainer>
          <SearchCTAText>해당하는 술을 선택해주세요.</SearchCTAText>
          <AlcoholsContainer>
            {searchAlcohols.data.data.list.map((value) => (
              <Alcohol alchol={value} key={value.seq} />
            ))}
          </AlcoholsContainer>
        </SearchResultContainer>
      ) : null}
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  padding: 0 2.2rem;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const SearchCTAText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color: #8e8e8e;
`;

const AlcoholsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  height: 100%;
  overflow-y: scroll;
`;
