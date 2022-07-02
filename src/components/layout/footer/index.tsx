/* eslint-disable @next/next/no-img-element */
import { Background, Button, Container } from './styles';

const Footer = () => (
  <Container>
    <Background src="/image/layout/footer.svg" />
    <div>
      <Button>
        <img src="/image/icon/search.svg" alt="search" />
        검색
      </Button>
      <Button>
        <img src="/image/icon/recommend.svg" alt="recommend" />
        추천페이지
      </Button>
    </div>
  </Container>
);
export default Footer;
