/* eslint-disable react/jsx-one-expression-per-line */
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
import { Experience } from 'types/sullog.interface';

const Card = ({ record }: { record: Experience }) => (
  <Wrapper>
    <TopTitleBox>
      <PinImage src="/image/icon/pin.svg" alt="pin" />
      <Direction>
        {record.province} {record.city}
      </Direction>
      <Category>
        {record.type === '소주/증류주' ? '소주' : record.type}
      </Category>
    </TopTitleBox>
    <BottomBox>
      <LeftBox>
        <TitleBox>
          <DrinkTitle>{record.name}</DrinkTitle>
          <BrandTitle>{record.manufacturer}</BrandTitle>
        </TitleBox>
        <Description>{record.etc}</Description>
      </LeftBox>
      <RightBox />
    </BottomBox>
  </Wrapper>
);

export default Card;
