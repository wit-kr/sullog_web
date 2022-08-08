import {
  Container,
  Wrapper,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';

const SearchInputBox = () => (
  <Container>
    <Wrapper>
      <SearchInput autoFocus />
      <CancelButton>
        <CancelIcon src="/image/icon/cancel.svg" />
      </CancelButton>
    </Wrapper>
  </Container>
);

export default SearchInputBox;
