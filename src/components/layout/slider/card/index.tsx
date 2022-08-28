import {
  BrandTitle,
  BottomBox,
  Category,
  Description,
  Direction,
  DrinkTitle,
  LeftBox,
  PinImage,
  RightBox,
  TitleBox,
  TopTitleBox,
  Wrapper,
} from '@components/layout/slider/card/styles';

const Card = () => (
  <Wrapper>
    <TopTitleBox>
      <PinImage src="/image/icon/pin.svg" alt="pin" />
      <Direction>강남구 테헤란로</Direction>
      <Category>소주</Category>
    </TopTitleBox>
    <BottomBox>
      <LeftBox>
        <TitleBox>
          <DrinkTitle>술이름</DrinkTitle>
          <BrandTitle>브랜드</BrandTitle>
        </TitleBox>
        <Description>
          테이스팅, 시식, 시음, 맛 평가. 식품 의 질을 맛으로 평가하는 것. 특히
          버 터, 오일, 푸아그라, 초콜릿 등은 전문 맛 감정사가 있다. 파리 시
          연구소에
        </Description>
      </LeftBox>
      <RightBox />
    </BottomBox>
  </Wrapper>
);

export default Card;
