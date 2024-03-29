import styled from 'styled-components';

export const RecentContentsWrapper = styled.div`
  width: 100%;
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
