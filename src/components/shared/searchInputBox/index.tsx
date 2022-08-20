import {
  Container,
  Wrapper,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';
import React, { KeyboardEvent, useCallback, useState } from 'react';

interface SearchInputBoxProps {
  onSubmit: (text: string) => void;
  placeholder: string;
}

const SearchInputBox = ({ onSubmit, placeholder }: SearchInputBoxProps) => {
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

  const handleOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'enter') {
      onSubmit(searchInput);
    }
  };

  return (
    <Container>
      <Wrapper>
        <SearchInput
          autoFocus
          placeholder={placeholder}
          type="text"
          value={searchInput}
          onKeyPress={handleOnKeyPress}
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
