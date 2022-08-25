/* eslint-disable no-use-before-define */
/* eslint-disable global-require */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import KakaoButton from './button/kakao';
import NaverButton from './button/naver';
import { ButtonContainer, Description, Logo, Slogan, Wrapper } from './styles';

const Login = () => {
  const router = useRouter();
  const { auth, initializing, user } = useAuth();
  const { access_token, type, email } = router.query;
  const lottieRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./sullog.json'),
      });
    }
  }, [lottieRef]);

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
      const token = access_token;
      auth.signIn({ token, type, email });
      router.push('/'); // go to default protected page
    }
  }, [router, initializing, user]);

  return (
    <Wrapper>
      <div>
        <Logo src="/logo.svg" alt="logo" />
        <SullogAnimation ref={lottieRef} />
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

const SullogAnimation = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  margin: 0 auto;
  z-index: 1000;
`;
