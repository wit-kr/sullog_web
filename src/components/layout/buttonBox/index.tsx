import { Button, Container, FirstBox, SecondBox, ThirdBox } from './styles';

const ButtonBox = () => (
  <Container>
    <FirstBox>
      <Button>
        <img src="/image/icon/search.svg" alt="search" />
        검색
      </Button>
    </FirstBox>
    <SecondBox>
      <img src="/image/circlebox.svg" alt="any" />
    </SecondBox>
    <ThirdBox>
      <Button>
        <img src="/image/icon/recommend.svg" alt="recommend" />
        추천페이지
      </Button>
    </ThirdBox>
  </Container>
);

export default ButtonBox;
