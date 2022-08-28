import {
  Container,
  BackButton,
  BackButtonIcon,
  Title,
} from '@components/layout/header/headerWithBack/styles';
import SearchInputBox from '@components/shared/searchInputBox';
import { Experience } from '../../../../types/sullog.interface';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
  setIsSubmit: (isSubmit: boolean) => void;
  setData: (data: Experience[] | undefined) => void;
};

const HeaderWithBack = ({
  isModalShow,
  setIsModalShow,
  setIsSubmit,
  setData,
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
      <SearchInputBox setIsSubmit={setIsSubmit} setData={setData} />
    </Container>
  );
};

export default HeaderWithBack;
