import KakaoButton from './button/kakao';
import NaverButton from './button/naver';
import { ButtonContainer, Description, Logo, Slogan, Wrapper } from './styles';

const Login = () => (
  <Wrapper>
    <div>
      <Logo src="/logo.svg" alt="logo" />
      <Slogan src="/slogan.svg" alt="slogan" />
    </div>
    <div>
      <ButtonContainer>
        <KakaoButton />
        <NaverButton />
      </ButtonContainer>
      <Description>
        첫 로그인시&nbsp;
        <button type="button">이용약관</button>
        {' 및\n'}
        <button type="button">개인정보처리방침</button>
        &nbsp;동의로 간주됩니다.
      </Description>
    </div>
  </Wrapper>
);

export default Login;
