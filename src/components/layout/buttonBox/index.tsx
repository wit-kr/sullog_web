import { Container, FirstBox, SecondBox, ThirdBox } from './styles';

const ButtonBox = () => (
  <Container>
    <FirstBox />
    <SecondBox>
      <img src="/image/circlebox.svg" alt="any" />
    </SecondBox>
    <ThirdBox />
  </Container>
);

export default ButtonBox;
