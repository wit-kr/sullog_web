import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 16px 22px;
  width: 80vw;
  max-width: 420px;
  margin-left: 20px;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;

export const RightBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin-left: 12px;
`;

export const TopTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PinImage = styled.img`
  margin-right: 5px;
`;

export const Direction = styled.h2`
  margin-right: 5px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #000;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  width: 35px;
  height: 16px;
  background-color: #3e14b4;
  border-radius: 10px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DrinkTitle = styled.h1`
  margin-right: 5px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.6rem;
`;

export const BrandTitle = styled.h2`
  font-family: 'NotoSansKRRegular';
  font-size: 1rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: #a0a0a0;
`;

export const Description = styled.p`
  font-family: 'NotoSansKRRegular';
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: #505050;
`;
