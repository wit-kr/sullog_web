import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import tokenState from 'shared/atoms/token';
import styled from 'styled-components';
import Map from './Map';

const Home = () => {
  const router = useRouter();
  const token = router.query?.access_token;

  const [savedToken, setSavedToken] = useRecoilState(tokenState);

  useEffect(() => {
    if (token === undefined && savedToken === '') {
      router.push('/login');
    } else if (token && savedToken === '') {
      setSavedToken(Array.isArray(token) ? token.join() : token);
    }
  }, [token]);

  console.log(token);

  return <div>{/* <Map /> */}</div>;
};

export default Home;
