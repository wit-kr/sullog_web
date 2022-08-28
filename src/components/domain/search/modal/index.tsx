import {
  Container,
  RecentContentsWrapper,
  ResultContentsWrapper,
} from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/experience/item';
import { useEffect, useState } from 'react';
import RecentContents from '@components/domain/search/recentContents';
import { is } from '@babel/types/lib/index-legacy';
import Result from '@components/domain/search/result';
import { useRecoilState, useRecoilValue } from 'recoil';
import { expState } from '../../../../atom/atoms';
import { Experience, SullogData } from '../../../../types/sullog.interface';

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
  const [data, setData] = useState<Experience[] | undefined>(undefined);
  useEffect(() => {
    console.log(data);
  }, [data]);

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
        setData={setData}
      />
      {!isSubmit ? (
        <RecentContentsWrapper>
          <RecentContents searchArr={searchArr} setSearchArr={setSearchArr} />
        </RecentContentsWrapper>
      ) : (
        <ResultContentsWrapper>
          {/* eslint-disable-next-line no-nested-ternary */}
          {data !== undefined ? (
            data?.length === 0 ? (
              <NoResult />
            ) : (
              // eslint-disable-next-line react/jsx-props-no-spreading
              data?.map((item) => <Result {...item} key={item?.seq} />)
            )
          ) : null}
        </ResultContentsWrapper>
      )}
    </Container>
  );
};

export default SearchModal;
