import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecentContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
  width: 83vw;
  max-width: 430px;
`;

export const ResultContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
  width: 78vw;
  max-width: 430px;
`;

export const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
