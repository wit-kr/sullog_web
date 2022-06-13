import KakaoButton from '@components/login/button/kakao';
import NaverButton from '@components/login/button/naver';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
`;

const Description = styled.p`
  text-align: center;
  font-family: 'NotoSansKR';
  color: #bbb;
  font-size: 1.1rem;
  font-weight: 350;
  line-height: 1.6rem;
  button {
    font-family: 'NotoSansKR';
    font-size: 1.1rem;
    font-weight: bold;
    color: #bbbbbb;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    padding: 0;
    background-color: transparent;
  }
`;

const Logo = styled.img`
  margin-top: 31vh;
`;

const Slogan = styled.img`
  margin-top: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23.75vh;
  margin-top: 30vh;
  > div:first-child {
    margin-bottom: 8px;
  }
  margin-bottom: 16px;
`;

const Home: NextPage = () => (
  <Wrapper>
    <Logo src="/logo.svg" alt="logo" />
    <Slogan src="/slogan.svg" alt="slogan" />
    <ButtonContainer>
      <KakaoButton />
      <NaverButton />
    </ButtonContainer>
    <Description>
      첫 로그인시&nbsp;
      <button type="button">이용약관</button>
      &nbsp;및
      <br />
      <button type="button">개인정보처리방침</button>
      &nbsp;동의로 간주됩니다.
    </Description>
  </Wrapper>
);

export default Home;
