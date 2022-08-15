import { Button, Icon } from '../../styles';

const kakaoLoginCallbackUrl =
  'https://kauth.kakao.com/oauth/authorize?client_id=c12449cd7cb9fadf119897f40e9067f3&redirect_uri=http://52.78.33.186:8080/sullog/login/kakaoLoginCallback&response_type=code';

const KakaoButton = () => (
  <Button
    color="#181600"
    backgroundColor="#fee500"
    href={kakaoLoginCallbackUrl}
  >
    <Icon src="/image/kakao.svg" alt="kakao" />
    카카오톡 로그인
  </Button>
);

export default KakaoButton;
