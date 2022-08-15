import {
  Container,
  HamburgerButton,
  Hamburger,
  Title,
} from '@components/layout/header/styles';
import SearchBox from '@components/shared/searchBox';
import { useState } from 'react';
import HamburgerModal from '@components/domain/hamburger/modal';

const Header = () => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const showModal = () => {
    setIsModalShow(!isModalShow);
  };

  return (
    <>
      <Container>
        <Title src="/image/title.svg" />
        <HamburgerButton onClick={showModal}>
          <Hamburger src="/image/icon/hamburger.svg" />
        </HamburgerButton>
        <SearchBox />
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

export default Header;
