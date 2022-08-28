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

const Explore = () => {
  const { data, isLoading, isError } = useGetAllExp();
  const experiences = data?.data;
  const [isData, setIsData] = useState(false);
  useEffect(() => {
    if (experiences !== undefined) {
      setIsData(true);
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
            <ExperienceBox key={exp?.seq}>
              <ExperienceImg src={`data:image/png;base64,${exp.image_byte}`} />
            </ExperienceBox>
          ))}
        </DataWrapper>
      )}
      <Footer />
    </Layout>
  );
};

export default Explore;
