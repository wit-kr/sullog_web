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
import Flavor from '@components/domain/create/wrtie/Flavor';

const Experience = () => (
  <Wrapper>
    <NavigationHeader canGoBack title="내 게시글" />
    <PhotoWrapper />
    <ContentsWrapper>
      <Category>과실주</Category>
      <NameBox>
        <Name>백련 맑은 술</Name>
        <Brand>신평 양조장</Brand>
      </NameBox>
      <RateBox>
        <StarIcon src="/image/icon/star.svg" />
        <Rate>4.0</Rate>
      </RateBox>
      <DetailBox>
        <Flavor
          disabled
          label="향"
          minLabel="별로다"
          maxLabel="좋다"
          data={4}
        />
        <Flavor
          disabled
          label="향"
          minLabel="별로다"
          maxLabel="좋다"
          data={2}
        />
        <Flavor
          disabled
          label="향"
          minLabel="별로다"
          maxLabel="좋다"
          data={1}
        />
      </DetailBox>
      <Description>
        백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
        백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
        백련 맑은 술 뱅련 말근 술 100련 맑은 술자리어카백련 맑은 술 먹었다리미
      </Description>
      <Date>2022.07.22</Date>
    </ContentsWrapper>
  </Wrapper>
);

export default Experience;
