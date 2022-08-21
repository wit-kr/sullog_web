import {
  Container,
  ContentsWrapper,
  NoResultWrapper,
} from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/search/item';
import { useEffect, useState } from 'react';
import RecentContents from '@components/domain/search/recentContents';
import { is } from '@babel/types/lib/index-legacy';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const SearchModal = ({ isModalShow, setIsModalShow }: modalProps) => {
  const [searchArr, setSearchArr] = useState<string[]>(
    JSON.parse(localStorage.getItem('search')!)
  );
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  useEffect(() => {
    setSearchArr(JSON.parse(localStorage.getItem('search')!));
  }, [isSubmit]);
  return (
    <Container>
      <HeaderWithBack
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
        isFocus={isFocus}
        setIsFocus={setIsFocus}
      />
      <ContentsWrapper>
        {!isSubmit ? (
          <RecentContents searchArr={searchArr} setSearchArr={setSearchArr} />
        ) : (
          <NoResultWrapper>
            <NoResult />
          </NoResultWrapper>
        )}
      </ContentsWrapper>
    </Container>
  );
};

export default SearchModal;
