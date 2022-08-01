import {
  Container,
  Wrapper,
  SearchInput,
  CancelButton,
  CancelIcon,
} from '@components/shared/searchInputBox/styles';

const SearchInputBox = () => {
  console.log('hi');
  return (
    <Container>
      <Wrapper>
        <SearchInput />
        <CancelButton onClick={() => console.log('cancel')}>
          <CancelIcon src="/image/icon/cancel.svg" />
        </CancelButton>
      </Wrapper>
    </Container>
  );
};

export default SearchInputBox;
