import {
  Container,
  BackButton,
  BackButtonIcon,
  HamburgerButton,
  Hamburger,
  Title,
} from '@components/layout/header/headerWithBack/styles';
import SearchBox from '@components/shared/searchBox';

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
      <HamburgerButton>
        <Hamburger src="/image/icon/hamburger.svg" />
      </HamburgerButton>
      <SearchBox />
    </Container>
  );
};

export default HeaderWithBack;
