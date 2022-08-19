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
  MiddleBox,
} from '@components/domain/hamburger/modal/styles';
import Button from '@components/domain/hamburger/button';
import { useEffect, useRef } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

export const data = {
  plugins: [ChartDataLabels],
  labels: ['소주', '과실주', '막걸리', '기타'],
  datasets: [
    {
      data: [35, 30, 25, 10],
      backgroundColor: ['#3E14B4', '#7855DA', '#A88DF4', '#D0C1FB'],
      cutout: 50,
    },
  ],
};

export const options: any = {
  plugins: {
    datalabels: {
      labels: {
        value: {
          family: 'NotoSansKRRegular',
          size: 12,
          weight: 500,
          height: 16,
          color: '#fff',
          textAlign: 'center',
        },
      },
      formatter(value: any, context: any) {
        return `${context.chart.data.labels[context.dataIndex]}\n(${value}%)`;
      },
    },
  },
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
          <MiddleBox>
            <TitleImage src="/image/title.svg" alt="title" />
            <ChartBox>
              <Doughnut data={data} options={options} />
            </ChartBox>
            <Description>
              술짱조아님은 10개의 술로그를 남겨주셨습니다
            </Description>
          </MiddleBox>
          <ButtonBox>
            <Button title="문의하기" />
            <Button title="로그아웃" />
          </ButtonBox>
        </ContentsBox>
      </Container>
    </Wrapper>
  );
};

export default HamburgerModal;
