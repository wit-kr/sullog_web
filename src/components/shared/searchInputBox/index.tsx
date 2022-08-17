import {
  Container,
  Wrapper,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';
import React, { useCallback, useState } from 'react';

const SearchInputBox = () => {
  const [searchInput, setSearchInput] = useState('');

  const onChangeSearchInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setSearchInput(e.currentTarget.value);
    },
    [searchInput]
  );

  const deleteSearchInput = (e: React.MouseEvent) => {
    setSearchInput('');
  };

  return (
    <Container>
      <Wrapper>
        <SearchInput
          autoFocus
          type="text"
          value={searchInput}
          onChange={onChangeSearchInput}
        />
        <CancelButton onClick={deleteSearchInput}>
          <CancelIcon src="/image/icon/cancel.svg" />
        </CancelButton>
      </Wrapper>
    </Container>
  );
};

export default SearchInputBox;
