import {
  Brand,
  Description,
  Drink,
  GridWrapper,
  LeftBox,
  RightBox,
  TitleBox,
  Wrapper,
} from '@components/domain/myExperiences/item/styles';

const Item = () => (
  <Wrapper>
    <GridWrapper>
      <LeftBox>
        <TitleBox>
          <Drink>술이름</Drink>
          <Brand>브랜드</Brand>
        </TitleBox>
        <Description>
          테이스팅, 시식, 시음, 맛 평가. 식품 의 질을 맛으로 평가하는 것. 특히
          버 터, 오일, 푸아그라, 초콜릿 등은 전문 맛 감정사가 있다. 파리 시
          연구소에
        </Description>
      </LeftBox>
      <RightBox />
    </GridWrapper>
  </Wrapper>
);

export default Item;
