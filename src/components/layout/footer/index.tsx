import {
  ButtonContainer,
  Container,
  RecommendButton,
  FeedButton,
  WriteButton,
} from '@components/layout/footer/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HamburgerModal from '@components/domain/hamburger/modal';

const Footer = () => {
  const router = useRouter();
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  // const [pathname, setPathname] = useState('');
  const buttonClicked = () => {
    router.push('/experience');
  };

  const showModal = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          <FeedButton onClick={buttonClicked}>
            {/* {pathname === '/explore' ? ( */}
            {/*   <img src="/image/icon/purplepeople.svg" alt="feed" /> */}
            {/* ) : ( */}
            <img src="/image/icon/people.svg" alt="other people" />
            {/* )} */}
            <span>둘러보기</span>
          </FeedButton>
          <RecommendButton onClick={showModal}>
            <img src="/image/icon/menu.svg" alt="recommend" />
            <span>메뉴</span>
          </RecommendButton>
        </ButtonContainer>
        <WriteButton onClick={() => router.push('/create/search')}>
          <img src="/image/icon/pencil.svg" alt="write" />
          <span>글쓰기</span>
        </WriteButton>
      </Container>
      {isModalShow && (
        <HamburgerModal
          isModalShow={isModalShow}
          setIsModalShow={setIsModalShow}
        />
      )}
    </>
  );
};

export default Footer;
