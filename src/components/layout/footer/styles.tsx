import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 18.5vh;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  background-color: yellow;
  background-image: url('/image/layout/footer.svg');
  width: 100%;
  height: 13.8vh;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 10.5vw;
    max-width: 50px;
    height: auto;
  }
  > p {
    margin-top: -5px;
    font-size: 1rem;
  }
`;

export const PlusButton = styled.div`
  background-color: red;
  position: relative;
  width: 100%;
  /* height: 9vh; */
  > img {
  }
`;
