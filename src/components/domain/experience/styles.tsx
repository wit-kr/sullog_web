import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  overflow: scroll;
  background-color: white;
`;

export const StyledSwiper = styled(Swiper)`
  margin-top: 20px;
  width: 100%;
  aspect-ratio: 1;
  background-color: #d9d9d9;
`;

export const PhotoWrapper = styled.img``;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 83vw;
  max-width: 450px;
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
  //flex-direction: row;
  flex-direction: column;
`;

export const Name = styled.h1`
  font-family: 'NotoSansKRRegular';
  //font-size: 2.6rem;
  font-size: 2.2rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const Brand = styled.h2`
  //margin-left: 8px;
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
  border-radius: 10px;
  margin-top: 18px;
  padding: 10px 27px;
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
