import {
  Container,
  BackButton,
  BackButtonIcon,
  Title,
} from '@components/layout/header/headerWithBack/styles';
import SearchInputBox from '@components/shared/searchInputBox';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const HeaderWithBack = ({ isModalShow, setIsModalShow }: modalProps) => {
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
        onSubmit={(text: string): void => {
          throw new Error('Function not implemented.');
        }}
        placeholder=""
      />
    </Container>
  );
};

export default HeaderWithBack;
