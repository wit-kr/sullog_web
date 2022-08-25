import {
  ButtonContainer,
  Container,
  RecommendButton,
  SettingButton,
  WriteButton,
} from '@components/layout/footer/styles';
import { useRouter } from 'next/router';
import { useSearchExpWithKeyword } from '../../../hooks/useSearchExpWithKeyword';

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <ButtonContainer>
        <SettingButton onClick={() => router.push('/experience')}>
          <img src="/image/icon/people.svg" alt="other people" />
          <span>더보기</span>
        </SettingButton>
        <RecommendButton>
          <img src="/image/icon/menu.svg" alt="recommend" />
          <span>메뉴</span>
        </RecommendButton>
      </ButtonContainer>
      <WriteButton onClick={() => router.push('/create/search')}>
        <img src="/image/icon/pencil.svg" alt="write" />
        <span>글쓰기</span>
      </WriteButton>
    </Container>
  );
};

export default Footer;
