import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useRouter } from 'next/router';
import { instance } from 'pages/_app';
import { useEffect, useState } from 'react';
import { getStorage, STORAGE_KEY, setStorage } from 'shared/storage';
import KakaoButton from './button/kakao';
import NaverButton from './button/naver';
import { ButtonContainer, Description, Logo, Slogan, Wrapper } from './styles';

const setAxiosHeader = (headers: { key: string; value: string }[]) => {
  instance.interceptors.request.use((config) => {
    headers.forEach((header) => {
      config.headers![header.key] = header.value;
    });
    return config;
  });
};

const Login = () => {
  const router = useRouter();
  const { auth, initializing, user } = useAuth();

  const { accesss_token, type, email } = router.query;

  useEffect(() => {
    if (
      typeof accesss_token === 'string' &&
      (type === 'naver' || type === 'kakao') &&
      typeof email === 'string'
    ) {
      const token = accesss_token;
      auth.signIn({ token, type, email });
    }

    if (!initializing) {
      if (user) {
        router.push('/'); // go to default protected page
      }
    }
  }, [router, initializing, user]);

  // useEffect(() => {
  //   const savedToken = getStorage(STORAGE_KEY.TOKEN);
  //   const savedType = getStorage(STORAGE_KEY.TYPE);

  //   if (!savedToken || !savedType) {
  //     router.push('/');
  //   } else {
  //     const headers = [
  //       { key: 'token', value: savedToken as string },
  //       { key: 'type', value: savedType as string },
  //     ];
  //     setAxiosHeader(headers);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (access_token && type) {
  //     const headers = [
  //       { key: 'token', value: access_token as string },
  //       { key: 'type', value: type as string },
  //     ];
  //     setAxiosHeader(headers);
  //     setStorage(KEY.TOKEN, access_token);
  //     setStorage(KEY.TYPE, type);
  //   }
  // }, [access_token, type]);

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
