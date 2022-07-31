import {
  Container,
  Wrapper,
  SearchInput,
  SearchIcon,
  FilterButton,
  FilterIcon,
} from '@components/shared/searchBox/styles';

const SearchBox = () => (
  <Container>
    <Wrapper>
      <SearchIcon src="/image/searchBox/searchIcon.svg" />
      <SearchInput type="text" placeholder="Search" />
      <FilterButton>
        <FilterIcon src="/image/searchBox/filterIcon.svg" />
      </FilterButton>
    </Wrapper>
  </Container>
);

export default SearchBox;
