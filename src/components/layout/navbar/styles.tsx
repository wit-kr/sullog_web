import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 8.1vh;
  background-color: #fff;
  > div:first-child {
    display: flex;
    flex-direction: row;
    padding: 0 20px;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 19vw;
  max-width: 100px;
  height: auto;
`;

export const Icon = styled.img`
  width: 5.8vw;
  max-width: 21px;
  height: auto;
`;
