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
import { useRouter } from 'next/router';
import { Experience } from '../../../../types/sullog.interface';

const Item = ({ ...item }: Experience) => {
  const router = useRouter();
  const userSeq = item?.user_seq;
  const alcholSeq = item?.alchol_seq;

  const clickItem = () => {
    router.push({
      pathname: '/experience/[userSeq]/[alcholSeq]',
      query: { userSeq, alcholSeq },
    });
  };

  return (
    <Wrapper onClick={clickItem}>
      <LeftBox>
        <Title>
          <Drink>{item?.name}</Drink>
          <Brand>{item?.manufacturer}</Brand>
        </Title>
        <Description>{item?.etc}</Description>
      </LeftBox>
      <RightBox>
        <DrinkImage />
      </RightBox>
    </Wrapper>
  );
};

export default Item;
