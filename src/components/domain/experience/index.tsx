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
import { useGetOneExp } from '../../../hooks/useGetOneExp';

const Experience = () => {
  const router = useRouter();
  const { userSeq, alcholSeq } = router.query;
  const { data, isLoading } = useGetOneExp({
    userSeq: Number(userSeq),
    alcholSeq: Number(alcholSeq),
    options: {},
  });
  const exp = data?.data;
  return (
    <Wrapper>
      <NavigationHeader canGoBack title="내 게시글" />
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
