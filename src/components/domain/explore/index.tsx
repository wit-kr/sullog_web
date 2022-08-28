import {
  DataWrapper,
  ExperienceBox,
  NoDataTitle,
  NoDataWrapper,
} from '@components/domain/explore/styles';
import Footer from '@components/layout/footer';
import { useState } from 'react';
import Layout from '@components/layout';

const Explore = () => {
  const [isData, setIsData] = useState(true);

  return (
    <Layout>
      {!isData ? (
        <NoDataWrapper>
          <NoDataTitle>아직 이웃의 술로그가 없습니다</NoDataTitle>
        </NoDataWrapper>
      ) : (
        <DataWrapper>
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
          <ExperienceBox />
        </DataWrapper>
      )}
      <Footer />
    </Layout>
  );
};

export default Explore;
