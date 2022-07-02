import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.75fr 80px 1.75fr;
  gap: 0px;
  align-items: end;
  width: 100%;
`;

export const FirstBox = styled.div`
  background-color: #fff;
  height: 102px;
  border-radius: 6px 6px 0 6px;
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
`;
