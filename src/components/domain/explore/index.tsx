import {
  DataWrapper,
  ExperienceBox,
  ExperienceImg,
  NoDataTitle,
  NoDataWrapper,
} from '@components/domain/explore/styles';
import Footer from '@components/layout/footer';
import { useEffect, useState } from 'react';
import Layout from '@components/layout';
import { useGetAllExp } from '../../../hooks/useGetAllExp';
import Box from './Box';

const Explore = () => {
  const { data, isLoading } = useGetAllExp();
  const experiences = data?.data;
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    if (experiences !== undefined) {
      if (experiences.length === 0) {
        setIsData(false);
      } else {
        setIsData(true);
      }
    }
  }, [isLoading]);

  return (
    <Layout>
      {!isData ? (
        <NoDataWrapper>
          <NoDataTitle>아직 이웃의 술로그가 없습니다</NoDataTitle>
        </NoDataWrapper>
      ) : (
        <DataWrapper>
          {experiences?.map((exp) => (
            <Box exp={exp} key={exp.seq} />
          ))}
        </DataWrapper>
      )}
      <Footer />
    </Layout>
  );
};

export default Explore;
