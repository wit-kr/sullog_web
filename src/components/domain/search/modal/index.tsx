import {
  Container,
  ContentsWrapper,
  RecentContentsWrapper,
  RecentContentsTitleBox,
  RecentContentsTitle,
  DeleteAllButton,
  NoResultWrapper,
  RecentItemsBox,
  RecentItems,
  DeleteButton,
  DeleteButtonIcon,
} from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/search/item';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const SearchModal = ({ isModalShow, setIsModalShow }: modalProps) => (
  <Container>
    <HeaderWithBack isModalShow={isModalShow} setIsModalShow={setIsModalShow} />
    <ContentsWrapper>
      <Item />
    </ContentsWrapper>
    {/* <NoResultWrapper> */}
    {/*   <NoResult /> */}
    {/* </NoResultWrapper> */}
    {/* <RecentContentsWrapper> */}
    {/*   <RecentContentsTitleBox> */}
    {/*     <RecentContentsTitle>최근 검색어</RecentContentsTitle> */}
    {/*     <DeleteAllButton>모두 지우기</DeleteAllButton> */}
    {/*   </RecentContentsTitleBox> */}
    {/*   <RecentItemsBox> */}
    {/*     <RecentItems> */}
    {/*       맛있는 술 */}
    {/*       <DeleteButton> */}
    {/*         <DeleteButtonIcon src="/image/icon/delete.svg" /> */}
    {/*       </DeleteButton> */}
    {/*     </RecentItems> */}
    {/*     <RecentItems> */}
    {/*       달달한 과실주 */}
    {/*       <DeleteButton> */}
    {/*         <DeleteButtonIcon src="/image/icon/delete.svg" /> */}
    {/*       </DeleteButton> */}
    {/*     </RecentItems> */}
    {/*     <RecentItems> */}
    {/*       맛있고 달달한 술 */}
    {/*       <DeleteButton> */}
    {/*         <DeleteButtonIcon src="/image/icon/delete.svg" /> */}
    {/*       </DeleteButton> */}
    {/*     </RecentItems> */}
    {/*     <RecentItems> */}
    {/*       숙취 별로 없는 막걸리 */}
    {/*       <DeleteButton> */}
    {/*         <DeleteButtonIcon src="/image/icon/delete.svg" /> */}
    {/*       </DeleteButton> */}
    {/*     </RecentItems> */}
    {/*   </RecentItemsBox> */}
    {/* </RecentContentsWrapper> */}
  </Container>
);

export default SearchModal;
