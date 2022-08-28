import {
  Container,
  RecentContentsWrapper,
  ResultContentsWrapper,
} from '@components/domain/search/modal/styles';
import HeaderWithBack from '@components/layout/header/headerWithBack';
import NoResult from '@components/domain/search/noResult';
import { useEffect, useState } from 'react';
import RecentContents from '@components/domain/search/recentContents';
import Result from '@components/domain/search/result';
import { Experience } from '../../../../types/sullog.interface';

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const SearchModal = ({ isModalShow, setIsModalShow }: modalProps) => {
  const [searchArr, setSearchArr] = useState<string[]>(
    JSON.parse(localStorage.getItem('search')!)
  );
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [data, setData] = useState<Experience[] | undefined>(undefined);

  useEffect(() => {
    setSearchArr(JSON.parse(localStorage.getItem('search')!));
  }, [isSubmit]);

  return (
    <Container>
      <HeaderWithBack
        isModalShow={isModalShow}
        setIsModalShow={setIsModalShow}
        setIsSubmit={setIsSubmit}
        setData={setData}
      />
      {!isSubmit ? (
        <RecentContentsWrapper>
          <RecentContents
            searchArr={searchArr}
            setSearchArr={setSearchArr}
            setData={setData}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
          />
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
