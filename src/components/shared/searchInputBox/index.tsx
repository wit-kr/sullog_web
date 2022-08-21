import {
  Container,
  Wrapper,
  SearchForm,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const searchArr = JSON.parse(localStorage.getItem('search')!);

  useEffect(() => {
    if (localStorage.search === undefined) {
      localStorage.setItem('search', JSON.stringify([]));
    }
  }, []);

  const onChangeSearchInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setSearchInput(e.currentTarget.value);
    },
    [searchInput]
  );

  const deleteSearchInput = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchInput('');
  };

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
