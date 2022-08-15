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
import FilterModal from '@components/domain/search/filter';

const SearchBox = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [isFilterShow, setIsFilterShow] = useState<boolean>(false);

  const showModal = () => {
    setIsModalShow(!isModalShow);
  };

  const showFilter = () => {
    setIsFilterShow(!isFilterShow);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <SearchButton onClick={showModal}>
            <SearchIcon src="/image/searchBox/searchIcon.svg" />
            <SearchButtonTitle>Search</SearchButtonTitle>
          </SearchButton>
          <FilterButton onClick={showFilter}>
            <FilterIcon
              isFilterShow={isFilterShow}
              src="/image/searchBox/filterIcon.svg"
            />
          </FilterButton>
        </Wrapper>
      </Container>
      {isModalShow && (
        <SearchModal
          isModalShow={isModalShow}
          setIsModalShow={setIsModalShow}
        />
      )}
      {isFilterShow && <FilterModal />}
    </>
  );
};

export default SearchBox;
