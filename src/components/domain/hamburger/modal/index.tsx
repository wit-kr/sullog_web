import {
  CloseButton,
  CloseImage,
  Container,
  ContentsBox,
  NickName,
  TextBox,
  TitleImage,
  ChartBox,
  Description,
  Welcome,
  Wrapper,
  ButtonBox,
} from '@components/domain/hamburger/modal/styles';
import Button from '@components/domain/hamburger/button';
import { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [35, 30, 25, 10],
      backgroundColor: ['#3E14B4', '#7855DA', '#A88DF4', '#D0C1FB'],
    },
  ],
};

type modalProps = {
  isModalShow: boolean;
  setIsModalShow: (isModalShow: boolean) => void;
};

const HamburgerModal = ({ isModalShow, setIsModalShow }: modalProps) => {
  const closeHamburgerModal = () => {
    setIsModalShow(!isModalShow);
  };

  const modalRef = useRef<any>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalShow(!isModalShow);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [modalRef]);

  return (
    <Wrapper>
      <Container ref={modalRef}>
        <CloseButton onClick={closeHamburgerModal}>
          <CloseImage src="/image/icon/cancel.svg" alt="close" />
        </CloseButton>
        <ContentsBox>
          <TextBox>
            <div>
              <NickName>이짱구</NickName>
              <Welcome> 님 환영해요!</Welcome>
            </div>
            <Welcome>오늘도 나만의 술로그를 남겨보아요</Welcome>
          </TextBox>
          <TitleImage src="/image/title.svg" alt="title" />
          <ChartBox>
            <Doughnut data={data} />
          </ChartBox>
          <Description>술짱조아님은 10개의 술로그를 남겨주셨습니다</Description>
          <ButtonBox>
            <Button title="앱 정보" />
            <Button title="문의하기" />
            <Button title="계정 설정" />
            <Button title="로그아웃" />
          </ButtonBox>
        </ContentsBox>
      </Container>
    </Wrapper>
  );
};

export default HamburgerModal;
