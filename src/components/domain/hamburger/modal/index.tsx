import {
  CloseButton,
  CloseImage,
  Container,
  ContentsBox,
  NickName,
  TextBox,
  TitleImage,
  Welcome,
  Wrapper,
  ButtonBox,
} from '@components/domain/hamburger/modal/styles';
import Button from '@components/domain/hamburger/button';
import { useEffect, useRef } from 'react';

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
          <ButtonBox>
            <Button />
            <Button />
            <Button />
            <Button />
          </ButtonBox>
        </ContentsBox>
      </Container>
    </Wrapper>
  );
};

export default HamburgerModal;
