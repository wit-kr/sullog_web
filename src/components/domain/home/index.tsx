/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import { instance } from 'pages/_app';
import { useEffect, useLayoutEffect } from 'react';
import Map from './Map';

const Home = () => {
  return (
    <div>
      <Map />
    </div>
  );
};

export default Home;
