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
  margin-top: 110px;
  width: 87vw;
  max-width: 450px;
`;

export const RecentContentsTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RecentContentsTitle = styled.p`
  font-family: 'NotoSansKRRegular';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.6rem;
  color: #3e14b4;
`;

export const DeleteAllButton = styled.button`
  cursor: grab;
  font-family: 'NotoSansKRRegular';
  font-size: 1rem;
  line-height: 2.6rem;
  color: #b5b5b5;
`;
