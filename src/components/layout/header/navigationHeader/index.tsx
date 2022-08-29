/* eslint-disable react/require-default-props */
import {
  Container,
  HeaderButton,
  BackButtonIcon,
  TitleImage,
  Title,
  HeaderRightText,
} from '@components/layout/header/navigationHeader/styles';
import { useRouter } from 'next/router';

interface HeaderRightProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface NavigationHeaderProps {
  canGoBack?: Boolean;
  title?: string;
  headerRight?: HeaderRightProps;
  titleImage?: string;
}

const NavigationHeader = ({
  canGoBack,
  title,
  headerRight,
  titleImage,
}: NavigationHeaderProps) => {
  const router = useRouter();

  const goBack = () => router.back();

  const goHome = () => router.push('/');

  return (
    <Container>
      {/* if can go back, then show go back */}
      {canGoBack ? (
        <HeaderButton onClick={goBack} style={{ left: '2rem' }}>
          <BackButtonIcon src="/image/icon/back.svg" />
        </HeaderButton>
      ) : (
        <HeaderButton onClick={goHome} style={{ left: '2rem' }}>
          <BackButtonIcon src="/image/icon/back.svg" />
        </HeaderButton>
      )}

      {/* if title exists, then show title instead of image */}
      {/* {title ? <Title>{title}</Title> : <TitleImage src="/image/title.svg" />} */}
      {title ? <Title>{title}</Title> : null}
      {titleImage ? <TitleImage src={titleImage} /> : null}

      {/* if headerRight exists, then show headerRight instead of empty div */}
      {headerRight ? (
        <HeaderButton onClick={headerRight.onClick} style={{ right: '2rem' }}>
          <HeaderRightText
            disabled={
              headerRight.disabled === undefined ? true : headerRight.disabled
            }
          >
            {headerRight.label}
          </HeaderRightText>
        </HeaderButton>
      ) : (
        <div />
      )}
    </Container>
  );
};

export default NavigationHeader;
