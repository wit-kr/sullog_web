import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 80px 1.75fr;
  gap: 0px;
  align-items: end;
  width: 100%;
  height: 102px;
`;

export const FirstBox = styled.div`
  background-color: #fff;
  height: 100%;
  border-radius: 6px 6px 0 6px;
  display: flex;
  justify-content: center;
`;

export const SecondBox = styled.div`
  display: flex;
  align-items: flex-end;
  > img {
    width: 100%;
    height: auto;
  }
`;

export const ThirdBox = styled.div`
  background-color: #fff;
  height: 100%;
  border-radius: 6px 6px 6px 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
`;
