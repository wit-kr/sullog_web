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
import { Experience } from '../../../../types/sullog.interface';

const Item = ({ ...item }: Experience) => {
  console.log(item);

  return (
    <Wrapper>
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
