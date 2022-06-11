import KakaoButton from '@components/login/button/kakao';
import NaverButton from '@components/login/button/naver';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  /* iOS only */
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  > p {
    position: absolute;
    bottom: 7.75vh;
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
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 35vh;
  /* margin-top: 35vh; */
`;

const Slogan = styled.img`
  position: absolute;
  top: 42.5vh;
  /* margin-top: 1.5vh; */
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 14.75vh;
  > div {
    margin-bottom: 1vh;
  }
`;

const Home: NextPage = () => (
  <Wrapper>
    <Logo src="/logo.svg" alt="logo" />
    <Slogan src="/slogan.svg" alt="slogan" />
    <ButtonContainer>
      <KakaoButton />
      <NaverButton />
    </ButtonContainer>
    <p>
      첫 로그인시&nbsp;
      <button type="button">이용약관</button>
      &nbsp;및
      <br />
      <button type="button">개인정보처리방침</button>
      &nbsp;동의로 간주됩니다.
    </p>
  </Wrapper>
);

export default Home;
