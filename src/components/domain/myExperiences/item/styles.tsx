import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 12px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 94vw;
  align-items: center;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Drink = styled.h1`
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.6rem;
`;

export const Brand = styled.h2`
  font-family: 'NotoSansKRRegular';
  font-size: 1rem;
  font-weight: 400;
  color: #a0a0a0;
`;

export const Description = styled.div`
  margin-top: 4px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: #505050;
`;

export const RightBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;
