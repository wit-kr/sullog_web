import {
  Container,
  Wrapper,
  SearchForm,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSearchExp } from '../../../hooks/useSearchExp';
import { useSearchAllExp } from '../../../hooks/useSearchAllExp';
import { useSearchAlcohols } from '../../../hooks/useSearchAlcohols';
import { expState } from '../../../atom/atoms';

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
  const [data, setData] = useRecoilState(expState);
  const [searchInput, setSearchInput] = useState<string>('');
  const [flag, setFlag] = useState<boolean>(false);
  const searchArr = JSON.parse(localStorage.getItem('search')!);
  const searchExp = useSearchAllExp({
    userSeq: 29,
    keyword: searchInput,
    options: { enabled: false },
  });
  useEffect(() => {
    if (localStorage.search === undefined) {
      localStorage.setItem('search', JSON.stringify([]));
    }
    if (flag) {
      searchExp.refetch();
      setData(searchExp);
    }
  }, [flag]);

  const onChangeSearchInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setFlag(false);
      setSearchInput(e.currentTarget.value);
    },
    [searchInput]
  );

  const deleteSearchInput = (e: React.MouseEvent) => {
    e.preventDefault();
    setSearchInput('');
  };

  // 검색어 입력 후 엔터
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(searchInput);
    if (searchInput.trim().length !== 0) {
      inputRef.current!.blur(); // 제출 후 focus 해제
      searchArr.unshift(searchInput); // 맨 앞으로 요소 추가
      const cleanArr = [...new Set(searchArr)]; // 중복 삭제
      localStorage.setItem('search', JSON.stringify(cleanArr)); // 로컬스토리지 저장
      setIsSubmit(true);
      setFlag(true);
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
