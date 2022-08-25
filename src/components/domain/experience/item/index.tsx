import {
  Wrapper,
  LeftBox,
  RightBox,
  Title,
  Drink,
  Brand,
  Description,
  DrinkImage,
} from '@components/domain/experience/item/styles';

const Item = ({ data }: any) => {
  console.log(data);

  return (
    <Wrapper>
      <LeftBox>
        <Title>
          <Drink>술이름</Drink>
          <Brand>브랜드</Brand>
        </Title>
        <Description>
          테이스팅, 시식, 시음, 맛 평가. 식품 의 질을 맛으로 평가하는 것. 특히
          버 터, 오일, 독한 술, 초콜릿 등은 전문 맛 감정사가 있다. 파리 시
          연구소에
        </Description>
      </LeftBox>
      <RightBox>
        <DrinkImage />
      </RightBox>
    </Wrapper>
  );
};

export default Item;
