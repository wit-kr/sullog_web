import { Button, Icon } from '../../styles';

const naverLoginCallbackUrl =
  'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=D_1pjm3y2CmU8A7NfcnD&state=SULLOG_NAVER_LOGIN&redirect_uri=http://52.78.33.186:8080/sullog/login/naverLoginCallback';

const NaverButton = () => (
  <Button
    color="#ffffff"
    backgroundColor="#03c75a"
    href={naverLoginCallbackUrl}
  >
    <Icon src="/image/naver.svg" alt="naver" />
    네이버 로그인
  </Button>
);

export default NaverButton;
