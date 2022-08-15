/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import { instance } from 'pages/_app';
import { useEffect, useLayoutEffect } from 'react';
import { getStorage, KEY, setStorage } from 'shared/storage';
import Map from './Map';

const setAxiosHeader = (headers: { key: string; value: string }[]) => {
  instance.interceptors.request.use((config) => {
    headers.forEach((header) => {
      config.headers![header.key] = header.value;
    });
    return config;
  });
};

const Home = () => {
  const router = useRouter();
  const { access_token, type } = router.query;

  useEffect(() => {
    const savedToken = getStorage(KEY.TOKEN);
    const savedType = getStorage(KEY.TYPE);

    if (!savedToken || !savedType) {
      router.push('/login');
    } else {
      const headers = [
        { key: 'token', value: savedToken as string },
        { key: 'type', value: savedType as string },
      ];
      setAxiosHeader(headers);
    }
  }, []);

  useEffect(() => {
    if (access_token && type) {
      const headers = [
        { key: 'token', value: access_token as string },
        { key: 'type', value: type as string },
      ];
      setAxiosHeader(headers);
      setStorage(KEY.TOKEN, access_token);
      setStorage(KEY.TYPE, type);
    }
  }, [access_token, type]);

  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;
