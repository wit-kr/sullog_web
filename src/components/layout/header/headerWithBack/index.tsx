import {
  Container,
  BackButton,
  BackButtonIcon,
  Title,
} from '@components/layout/header/headerWithBack/styles';
import SearchInputBox from '@components/shared/searchInputBox';
import { useSearchAllExp } from '../../../../hooks/useSearchAllExp';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
  isFocus: boolean;
  setIsFocus: (isFocus: boolean) => void;
};

const HeaderWithBack = ({
  isModalShow,
  setIsModalShow,
  isSubmit,
  setIsSubmit,
  isFocus,
  setIsFocus,
}: modalProps) => {
  const closeSearchModal = () => {
    setIsModalShow(!isModalShow);
  };
  return (
    <Container>
      <BackButton onClick={closeSearchModal}>
        <BackButtonIcon src="/image/icon/back.svg" />
      </BackButton>
      <Title src="/image/title.svg" />
      <SearchInputBox
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
      />
    </Container>
  );
};

export default HeaderWithBack;
