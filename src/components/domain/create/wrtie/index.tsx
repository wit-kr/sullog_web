/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import 'swiper/css';
import { Rating } from 'react-simple-star-rating';

interface WriteProps {
  id: number;
}

const Write = ({ id }: WriteProps) => {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [rating, setRating] = useState(0);
  const [degree, setDegree] = useState('');

  useEffect(() => {
    console.log(degree);
  }, [degree]);

  const onChangeImageInput = (e: FormEvent<HTMLInputElement>) => {};

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleDegree = (e: any) => {
    if (e.target.checked) {
      setDegree(e.target.id);
    }
  };

  return (
    <WriterContainer>
      <NavigationHeader canGoBack title="게시글" />
      {photos ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SlideImage src="https://via.placeholder.com/360" />
          </SwiperSlide>
          <SwiperSlide>
            <SlideImage src="https://via.placeholder.com/360" />
          </SwiperSlide>
        </Swiper>
      ) : (
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          onChange={onChangeImageInput}
        />
      )}
      <AlcoholInfoContainer>
        <AlcoholFieldContainer>
          <AlcoholFieldRow>
            <AlcoholField size="wide">
              <AlcoholFieldLabel>술이름</AlcoholFieldLabel>
              <AlcoholFieldTextValue>백련 맑은 술</AlcoholFieldTextValue>
            </AlcoholField>
            <AlcoholField size="narrow">
              <AlcoholFieldLabel>주종</AlcoholFieldLabel>
              <AlcoholFieldTextValue>기타</AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
          <AlcoholFieldRow>
            <AlcoholField size="wide">
              <AlcoholFieldLabel>브랜드</AlcoholFieldLabel>
              <AlcoholFieldTextValue>신평 양조장</AlcoholFieldTextValue>
            </AlcoholField>
            <AlcoholField size="narrow">
              <AlcoholFieldLabel>날짜</AlcoholFieldLabel>
              <AlcoholFieldTextValue>2022.07.22</AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
          <AlcoholFieldRow>
            <AlcoholField size="fill">
              <AlcoholFieldLabel>지역</AlcoholFieldLabel>
              <AlcoholFieldTextValue>
                충청남도 당진시 신평면 신평로 813
              </AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
        </AlcoholFieldContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>별점</AlcoholFieldLabel>
          <AlcoholRatingContainer>
            <AlcoholFieldCTA>드래그해서 별점을 입력해보세요.</AlcoholFieldCTA>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              fillColor="#3E14B4"
              emptyColor="#D4D4D4"
              size={24}
            />
          </AlcoholRatingContainer>
        </AlcholInputContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>도수</AlcoholFieldLabel>
          <AlcoholRatingContainer>
            <AlcoholFieldCTA>내가 마신 술은 실제 도수보다</AlcoholFieldCTA>
            <label htmlFor="0">
              <AlcoholDegreeButton
                type="radio"
                id="0"
                name="degree"
                onChange={handleDegree}
                value="0"
              />
              <AlcoholDegreeText>연하다</AlcoholDegreeText>
            </label>
            <label htmlFor="1">
              <AlcoholDegreeButton
                type="radio"
                id="1"
                name="degree"
                onChange={handleDegree}
                value="1"
              />
              <AlcoholDegreeText>보통이다</AlcoholDegreeText>
            </label>
            <label htmlFor="2">
              <AlcoholDegreeButton
                type="radio"
                id="2"
                name="degree"
                onChange={handleDegree}
                value="2"
              />
              <AlcoholDegreeText>독하다</AlcoholDegreeText>
            </label>
          </AlcoholRatingContainer>
        </AlcholInputContainer>
      </AlcoholInfoContainer>
    </WriterContainer>
  );
};

export default Write;

const WriterContainer = styled.div``;

const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const AlcoholInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 2.8rem 3rem;
  background-color: #ffffff;
`;

const AlcoholFieldContainer = styled.div`
  margin-bottom: 1rem;
`;

const AlcoholFieldRow = styled.div`
  display: flex;
  gap: 10%;
  margin-bottom: 1.8rem;
`;

const AlcoholField = styled.div<{ size: 'fill' | 'wide' | 'narrow' }>`
  display: flex;
  flex-direction: column;
  width: ${({ size }) =>
    size === 'fill' ? '100%' : size === 'wide' ? '60%' : '30%'};
`; // narrow(0.3), wide(0.6)

const AlcoholFieldLabel = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #c0c0c0;
  margin-bottom: 1.3rem;
`; // 술이름, 주종, 브랜드, 날짜, 지역

const AlcoholFieldTextValue = styled.span`
  padding-bottom: 0.7rem;
  border-bottom: 0.1rem solid #ebebeb;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.6rem;
  color: #000000;
`;

const AlcoholFieldCTA = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #a4a4a4;
  margin-bottom: 0.8rem;
`;

const AlcholInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 별점
const AlcoholRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1.4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
`;

// 도수
const AlcoholDegreeButtonContainer = styled.div``;

const AlcoholDegreeButton = styled.input``;

const AlcoholDegreeText = styled.span``;

// 플레이버
const AlcoholFlavorLabel = styled.span``; // 향, 맛, 감촉

const AlcoholFlavorInputLabel = styled.span``; // 별로다, 좋다

const AlcoholFlavorInput = styled.input``;

// 상세 플레이버
const AlcoholExpandableFlavor = styled.div``;

const AlcoholExpandableFlavorHeader = styled.span``; // 꽃, 과일, 곡물, ...

const AlcoholDetailFlavors = styled.div``;

const AlcoholDetailFlavor = styled.div``;

const AlcoholDetailFlavorLabel = styled.span``; // 국화, 매화, 아카시아, ...

// 상세 내용
const AlcoholMemo = styled.textarea``;
