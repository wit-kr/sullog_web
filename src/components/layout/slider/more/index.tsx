import {
  PlusIcon,
  PlusTitle,
  Wrapper,
} from '@components/layout/slider/more/styles';
import { useRouter } from 'next/router';

const More = () => {
  const router = useRouter();
  const routeToMyExperiences = () => {
    router.push('/myExperiences');
  };

  return (
    <Wrapper onClick={routeToMyExperiences}>
      <PlusIcon src="/image/icon/Union.svg" alt="more" />
      <PlusTitle>더보기</PlusTitle>
    </Wrapper>
  );
};

export default More;
