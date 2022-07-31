import {
  Container,
  Wrapper,
  SearchButton,
  SearchIcon,
  SearchButtonTitle,
  FilterButton,
  FilterIcon,
} from '@components/shared/searchBox/styles';
import { useState } from 'react';
import SearchModal from '@components/domain/search/modal';

const SearchBox = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const showModal = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <SearchButton onClick={showModal}>
            <SearchIcon src="/image/searchBox/searchIcon.svg" />
            <SearchButtonTitle>Search</SearchButtonTitle>
          </SearchButton>
          <FilterButton>
            <FilterIcon src="/image/searchBox/filterIcon.svg" />
          </FilterButton>
        </Wrapper>
      </Container>
      {isModalShow && <SearchModal />}
    </>
  );
};

export default SearchBox;
