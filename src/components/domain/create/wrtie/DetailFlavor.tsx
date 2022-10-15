import { Dispatch, SetStateAction, useState } from 'react';
import {
  Category,
  Container,
  Header,
  HeaderButton,
  Item,
  Items,
  ItemsContainer,
  ItemText,
} from './DetailFlavor.style';

interface DetailFlavorProps {
  category: string;
  items: string[];
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const DetailFlavor = ({
  category,
  items,
  state,
  setState,
}: DetailFlavorProps) => {
  const [expand, setExpand] = useState(false);

  const onClickHeaderButton = () => {
    setExpand(!expand);
  };

  return (
    <Container>
      <Header>
        <Category>{category}</Category>
        <HeaderButton
          src="/image/icon/expand.svg"
          onClick={onClickHeaderButton}
          expand={expand}
        />
      </Header>
      <ItemsContainer expand={expand}>
        <Items>
          {items.map((value) => (
            <Item
              key={value}
              selected={value === state}
              onClick={() => setState(value)}
            >
              <ItemText selected={value === state}>{value}</ItemText>
            </Item>
          ))}
        </Items>
      </ItemsContainer>
    </Container>
  );
};

export default DetailFlavor;
