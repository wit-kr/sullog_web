import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '@components/layout/slider/card';
import { StyledSwiper } from '@components/layout/slider/styles';
import More from '@components/layout/slider/more';

const Slider = () => {
  console.log('slider');
  return (
    <StyledSwiper slidesPerView="auto" centeredSlides>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <More />
      </SwiperSlide>
    </StyledSwiper>
  );
};

export default Slider;
