import {
  Container,
  RecentContentsWrapper,
  RecentContentsTitleBox,
  RecentContentsTitle,
  DeleteAllButton,
} from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const SearchModal = ({ isModalShow, setIsModalShow }: modalProps) => (
  <Container>
    <HeaderWithBack isModalShow={isModalShow} setIsModalShow={setIsModalShow} />
    <RecentContentsWrapper>
      <RecentContentsTitleBox>
        <RecentContentsTitle>최근 검색어</RecentContentsTitle>
        <DeleteAllButton>모두 지우기</DeleteAllButton>
      </RecentContentsTitleBox>
    </RecentContentsWrapper>
  </Container>
);

export default SearchModal;
