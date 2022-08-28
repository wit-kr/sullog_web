import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
`;

export const LeftBox = styled.div`
  width: 50vw;
`;

export const RightBox = styled.div`
  width: 100px;
  background-color: #d9d9d9;
  border-radius: 1rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Drink = styled.h1`
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  line-height: 2.6rem;
  font-weight: 500;
`;

export const Brand = styled.h2`
  margin-left: 6px;
  font-family: 'NotoSansKRRegular';
  font-size: 1rem;
  line-height: 2.6rem;
  font-weight: 400;
  color: #a0a0a0;
`;

export const Description = styled.p`
  font-family: 'NotoSansKRRegular';
  font-size: 1.1rem;
  line-height: 1.3rem;
  font-weight: 400;
  color: #505050;
`;

export const DrinkImage = styled.img``;
