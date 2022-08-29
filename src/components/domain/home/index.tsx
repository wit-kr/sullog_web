/* eslint-disable camelcase */
import Layout from '@components/layout';
import { useGetAllExp } from 'hooks/useGetAllExp';
import { useState } from 'react';
import Map from './Map';

const Home = () => {
  const [manufacturer, setManufacturer] = useState('');
  const manufacturerState = { state: manufacturer, setState: setManufacturer };
  const userRecords = useGetAllExp();

  return (
    <Layout
      records={userRecords.data?.data}
      manufacturerState={manufacturerState}
    >
      <Map
        records={userRecords.data?.data}
        manufacturerState={manufacturerState}
      />
    </Layout>
  );
};

export default Home;
