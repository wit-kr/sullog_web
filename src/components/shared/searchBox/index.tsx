import {
  Container,
  Wrapper,
  Box,
  SearchIcon,
  FilterButton,
  FilterIcon,
  SearchInput,
} from '@components/shared/searchBox/styles';

const SearchBox = () => (
  <Container>
    <Wrapper>
      <Box>
        <SearchIcon src="/image/searchBox/searchIcon.svg" />
        <SearchInput placeholder="Search" />
      </Box>
      <FilterButton>
        <FilterIcon src="/image/searchBox/filterIcon.svg" />
      </FilterButton>
    </Wrapper>
  </Container>
);

export default SearchBox;
