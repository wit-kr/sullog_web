import { Button, Icon } from '../../styles';

const KakaoButton = () => (
  <Button
    color="#181600"
    backgroundColor="#fee500"
    href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=D_1pjm3y2CmU8A7NfcnD&state=SULLOG_NAVER_LOGIN&redirect_uri=http://52.78.33.186:8080/sullog/login/naverLoginCallback"
  >
    <Icon src="/image/kakao.svg" alt="kakao" />
    카카오톡 로그인
  </Button>
);

export default KakaoButton;
