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

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 144px;
  width: 87%;
`;

export const NoResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const RecentContentsWrapper = styled.div`
  margin-top: 144px;
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

export const RecentItemsBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
`;

export const RecentItems = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.6rem;
  color: #545454;
  margin-bottom: 4px;
`;

export const DeleteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeleteButtonIcon = styled.img``;
