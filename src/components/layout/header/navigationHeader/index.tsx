/* eslint-disable react/require-default-props */
import {
  Container,
  BackButton,
  BackButtonIcon,
  TitleImage,
  Title,
} from '@components/layout/header/navigationHeader/styles';
import { useRouter } from 'next/router';

interface NavigationHeaderProps {
  canGoBack: Boolean;
  title?: string;
}

const NavigationHeader = ({ canGoBack, title }: NavigationHeaderProps) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Container>
      {canGoBack ? (
        <BackButton onClick={goBack}>
          <BackButtonIcon src="/image/icon/back.svg" />
        </BackButton>
      ) : (
        <div />
      )}
      {title ? <Title>{title}</Title> : <TitleImage src="/image/title.svg" />}
      <div />
    </Container>
  );
};

export default NavigationHeader;
