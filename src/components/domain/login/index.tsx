/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import KakaoButton from './button/kakao';
import NaverButton from './button/naver';
import { ButtonContainer, Description, Logo, Slogan, Wrapper } from './styles';

const Login = () => {
  const router = useRouter();
  const { auth, initializing, user } = useAuth();
  const { access_token, type, email } = router.query;

  useEffect(() => {
    const signInUser = async (
      token: string,
      type: 'naver' | 'kakao',
      email: string
    ) => {
      auth.signIn({ token, type, email });
      router.push('/'); // go to default protected page
    };
    if (
      typeof access_token === 'string' &&
      (type === 'naver' || type === 'kakao') &&
      typeof email === 'string'
    ) {
      signInUser(access_token, type, email);
    }
  }, [router, initializing, user]);

  return (
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
};

export default Login;
