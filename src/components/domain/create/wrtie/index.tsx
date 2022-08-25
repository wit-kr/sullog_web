/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FormEvent, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';

interface WriteProps {
  id: number;
}

const Write = ({ id }: WriteProps) => {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);

  const onChangeImageInput = (e: FormEvent<HTMLInputElement>) => {};

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
    </WriterContainer>
  );
};

export default Write;

const WriterContainer = styled.div``;

const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
