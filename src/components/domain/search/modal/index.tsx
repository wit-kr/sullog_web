import { Container } from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const SearchModal = ({ isModalShow, setIsModalShow }: modalProps) => (
  <Container>
    <HeaderWithBack isModalShow={isModalShow} setIsModalShow={setIsModalShow} />
  </Container>
);

export default SearchModal;
