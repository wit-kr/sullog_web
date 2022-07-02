import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 50px;
    margin-bottom: 4vh;
  }
`;

export const Background = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  > img {
    width: 10.5vw;
    max-width: 50px;
    height: auto;
  }
`;
