import {
  ButtonContainer,
  Container,
  RecommendButton,
  SettingButton,
  WriteButton,
} from '@components/layout/footer/styles';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
    <Container>
      <ButtonContainer>
        <SettingButton>
          <img src="/image/icon/setting.svg" alt="setting" />
          <span>설정</span>
        </SettingButton>
        <RecommendButton>
          <img src="/image/icon/recommend.svg" alt="recommend" />
          <span>추천</span>
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
