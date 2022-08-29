/* eslint-disable camelcase */
import Layout from '@components/layout';
import { useGetAllExp } from 'hooks/useGetAllExp';
import Map from './Map';

const Home = () => {
  const userRecords = useGetAllExp();

  if (userRecords.isError) {
    return <div>ERROR</div>;
  }

  if (userRecords.isLoading || userRecords.isIdle) {
    return <div>Loading,,</div>;
  }

  console.log(userRecords.data.data[0]);

  return (
    <Layout>
      <Map records={userRecords.data.data} />
    </Layout>
  );
};

export default Home;
