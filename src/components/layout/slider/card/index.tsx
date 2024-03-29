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
import { useRouter } from 'next/router';
import { Experience } from 'types/sullog.interface';

const Card = ({ record }: { record: Experience }) => {
  const router = useRouter();
  return (
    <Wrapper
      onClick={() => {
        router.push({
          pathname: '/experience/[userSeq]/[alcholSeq]',
          query: {
            userSeq: record.user_seq,
            alcholSeq: record.alchol_seq,
          },
        });
      }}
    >
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
        <RightBox src={`data:image/png;base64,${record.image_byte[0]}`} />
      </BottomBox>
    </Wrapper>
  );
};

export default Card;
