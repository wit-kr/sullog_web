import {
  Container,
  Wrapper,
  SearchButton,
  SearchIcon,
  SearchText,
  FilterButton,
  FilterIcon,
} from '@components/shared/searchBox/styles';

const SearchBox = () => (
  <Container>
    <Wrapper>
      <SearchButton>
        <SearchIcon src="/image/searchBox/searchIcon.svg" />
        <SearchText>Search</SearchText>
      </SearchButton>
      <FilterButton>
        <FilterIcon src="/image/searchBox/filterIcon.svg" />
      </FilterButton>
    </Wrapper>
  </Container>
);

export default SearchBox;
