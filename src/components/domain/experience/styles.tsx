import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PhotoWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 360px;
  background-color: greenyellow;
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 83vw;
  padding-top: 20px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 24px;
  background-color: #3e14b4;
  border-radius: 2rem;
  color: #fff;
  font-family: 'NotoSansKRRegular';
  font-weight: 500;
  font-size: 1.2rem;
`;

export const NameBox = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
`;

export const Name = styled.h1`
  font-family: 'NotoSansKRRegular';
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const Brand = styled.h2`
  margin-left: 8px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: #787878;
  margin-top: 5px;
`;

export const FeaturesBox = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
`;

export const RateBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const StarIcon = styled.img``;

export const Rate = styled.span`
  font-family: 'NotoSansKRRegular';
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 400;
  margin-left: 6px;
  margin-top: 3px;
`;

export const DetailBox = styled.div`
  background-color: #f9f9f9;
  width: 83vw;
  height: 140px;
  border-radius: 1rem;
  margin-top: 18px;
`;

export const Description = styled.p`
  margin-top: 20px;
  padding: 0 5px 0 5px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

export const Date = styled.p`
  margin-top: 20px;
  margin-bottom: 52px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #ccc;
`;
