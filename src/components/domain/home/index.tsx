/* eslint-disable camelcase */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { instance } from 'pages/_app';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import tokenState from 'shared/atoms/token';
import styled from 'styled-components';
import Map from './Map';

const Home = () => {
  const router = useRouter();
  const { access_token, type } = router.query;

  const isLoggedIn = access_token; // useIsLoggedIn()

  useEffect(() => {
    if (access_token && type) {
      // save access_token & type
      instance.interceptors.request.use((config) => {
        config.headers!.token = Array.isArray(access_token)
          ? access_token.join()
          : access_token;
        config.headers!.type = Array.isArray(type) ? type.join() : type;
        return config;
      });
    }
  }, [access_token, type]);

  // useEffect(() => {
  //   if (!isLoggedIn.data) {
  //     router.push('/login');
  //   }
  // }, [isLoggedIn]);

  // if (isLoggedIn.isLoadding || isLoggedIn.isIdle) {
  // }

  // if (isLoggedIn.isError) {
  // }

  return <div>{/* <Map /> */}</div>;
};

export default Home;
