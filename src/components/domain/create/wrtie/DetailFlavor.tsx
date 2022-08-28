import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.7rem 1rem 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #000000;
`;

const HeaderButton = styled.img<{ expand: boolean }>`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  transform: ${({ expand }) => (expand ? 'rotate(45deg);' : 'rotate(0deg);')};
  transition: 0.2s ease-in-out;
`;

const ItemsContainer = styled.div<{ expand: boolean }>`
  overflow: hidden;
  padding-top: ${({ expand }) => (expand ? '10px' : '0')};
  max-height: ${({ expand }) => (expand ? '10rem' : '0')};
  transition: ${({ expand }) =>
    expand ? 'max-height 0.4s' : 'max-height 0.4s cubic-bezier(0, 1, 0, 1)'};
`;

const Items = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Item = styled.div<{ selected: boolean }>`
  padding: 0.2rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ selected }) => (selected ? '#3E14B4' : '#eeeeee')};
  border-radius: 0.8rem;
  cursor: pointer;
`;

const ItemText = styled.span<{ selected: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#595959')};
`;

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
