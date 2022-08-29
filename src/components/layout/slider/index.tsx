import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from '@components/layout/slider/card';
import { StyledSwiper } from '@components/layout/slider/styles';
import More from '@components/layout/slider/more';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Experience } from 'types/sullog.interface';

interface SliderProps {
  records: Experience[];
  manufacturerState: {
    state: string;
    setState: Dispatch<SetStateAction<string>>;
  };
}

const Slider = ({ records, manufacturerState }: SliderProps) => {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (manufacturerState.state.length) setShowSlider(true);
  }, [manufacturerState.state]);

  if (showSlider) {
    return (
      <StyledSwiper slidesPerView="auto" centeredSlides>
        {records
          .filter((record) => record.manufacturer === manufacturerState.state)
          .map((record) => (
            <SwiperSlide>
              <Card record={record} />
            </SwiperSlide>
          ))}
      </StyledSwiper>
    );
  }

  return <div />;
};

export default Slider;
