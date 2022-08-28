import NavigationHeader from '@components/layout/header/navigationHeader';
import {
  Brand,
  Category,
  Name,
  NameBox,
  PhotoWrapper,
  ContentsWrapper,
  Wrapper,
  FeaturesBox,
  RateBox,
  StarIcon,
  Rate,
  DetailBox,
  Description,
  Date,
} from '@components/domain/experience/styles';
import Features from '@components/domain/experience/features';

const Experience = () => {
  console.log('experience');
  return (
    <Wrapper>
      <NavigationHeader canGoBack title="내 게시글" />
      <PhotoWrapper />
      <ContentsWrapper>
        <Category>과실주</Category>
        <NameBox>
          <Name>백련 맑은 술</Name>
          <Brand>신평 양조장</Brand>
        </NameBox>
        <FeaturesBox>
          <Features />
          <Features />
          <Features />
        </FeaturesBox>
        <RateBox>
          <StarIcon src="/image/icon/star.svg" />
          <Rate>4.0</Rate>
        </RateBox>
        <DetailBox />
        <Description>
          백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
          백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
          백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
        </Description>
        <Date>2022.07.22</Date>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Experience;
