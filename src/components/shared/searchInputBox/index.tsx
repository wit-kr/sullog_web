import {
  Container,
  Wrapper,
  SearchForm,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useSearchExpWithKeyword } from '../../../hooks/useSearchExpWithKeyword';

type inputBoxProps = {
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
};

const SearchInputBox = ({
  isSubmit,
  setIsSubmit,
  isFocus,
  setIsFocus,
}: inputBoxProps) => {
  // 유저 시퀀스 가져오기
  const { user } = useAuth();
  const seq = user?.seq;

  // 검색 인풋 관리
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>('');

  const { data, refetch } = useSearchExpWithKeyword({
    userSeq: seq!,
    keyword: searchInput,
    options: {},
  });

  // 로컬스토리지에서 최근 검색어 가져오기
  const searchArr = JSON.parse(localStorage.getItem('search')!);

  const searchExp = useSearchExpWithKeyword({
    userSeq: seq!,
    keyword: searchInput,
    options: { enabled: false },
  });

  // 마운트시 실행
  useEffect(() => {
    // 로컬스토리지에 search key 가 없다면 만들어주기
    if (localStorage.search === undefined) {
      localStorage.setItem('search', JSON.stringify([]));
    }
    if (isSubmit) {
      refetch();
    }
  }, []);

  // 검색 인풋 바뀔 때마다 setSearchInput
  const onChangeSearchInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setSearchInput(e.currentTarget.value);
    },
    [searchInput]
  );

  // 검색 인풋 초기화
  const deleteSearchInput = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchInput('');
  };

  // 검색어 입력 후 엔터
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchInput.trim().length !== 0) {
      inputRef.current!.blur(); // 제출 후 focus 해제
      searchArr.unshift(searchInput); // 맨 앞으로 요소 추가
      const cleanArr = [...new Set(searchArr)]; // 중복 삭제
      localStorage.setItem('search', JSON.stringify(cleanArr)); // 로컬스토리지 저장
      setIsSubmit(true);
    }
  };

  // 다시 focus 했을 때 최근 검색어 출력
  const handleOnFocus = () => {
    setIsSubmit(false);
  };

  return (
    <Container>
      <Wrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            ref={inputRef}
            autoFocus
            type="text"
            value={searchInput}
            onChange={onChangeSearchInput}
            onFocus={handleOnFocus}
            autoComplete="off"
          />
        </SearchForm>
        <CancelButton onClick={deleteSearchInput}>
          <CancelIcon src="/image/icon/cancel.svg" />
        </CancelButton>
      </Wrapper>
    </Container>
  );
};

export default SearchInputBox;
