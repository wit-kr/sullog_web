import NavigationHeader from '@components/layout/header/navigationHeader';
import {
  Brand,
  Category,
  Name,
  NameBox,
  PhotoWrapper,
  ContentsWrapper,
  Wrapper,
  RateBox,
  StarIcon,
  Rate,
  DetailBox,
  Description,
  Date,
} from '@components/domain/experience/styles';
import Flavor from '@components/domain/create/wrtie/Flavor';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetOneExp } from '../../../hooks/useGetOneExp';
import { SlideImage } from '../create/wrtie';

const Experience = () => {
  const router = useRouter();
  const { userSeq, alcholSeq } = router.query;

  const [userId, setUserId] = useState(userSeq);
  const [alcholId, setAlcholId] = useState(alcholSeq);

  const { data, isLoading, refetch } = useGetOneExp({
    userSeq: Number(userId),
    alcholSeq: Number(alcholId),
    options: {},
  });

  const exp = data?.data;

  return (
    <Wrapper>
      <NavigationHeader canGoBack title="내 게시글" />
      <Swiper spaceBetween={0} slidesPerView={1} style={{ width: '100%' }}>
        {exp?.image_byte.map((image: string) => (
          <SwiperSlide key={image}>
            <SlideImage src={`data:image/png;base64,${image}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <PhotoWrapper />
      <ContentsWrapper>
        <Category>{exp?.type}</Category>
        <NameBox>
          <Name>{exp?.name}</Name>
          <Brand>{exp?.manufacturer}</Brand>
        </NameBox>
        <RateBox>
          <StarIcon src="/image/icon/star.svg" />
          <Rate>{parseFloat(exp?.star!).toFixed(1)}</Rate>
        </RateBox>
        <DetailBox>
          <Flavor
            disabled
            label="향"
            minLabel="별로다"
            maxLabel="좋다"
            data={Number(exp?.incense)}
          />
          <Flavor
            disabled
            label="맛"
            minLabel="별로다"
            maxLabel="좋다"
            data={Number(exp?.taste)}
          />
          <Flavor
            disabled
            label="감촉"
            minLabel="별로다"
            maxLabel="좋다"
            data={Number(exp?.texture)}
          />
        </DetailBox>
        <Description>{exp?.etc}</Description>
        <Date>{exp?.time.split('T')[0]}</Date>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Experience;
