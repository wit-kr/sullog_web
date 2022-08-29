import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 120px);
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88vw;
  max-width: 450px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const FilterButton = styled.button``;

export const FilterImg = styled.img``;

export const ContentsWrapper = styled.div`
  width: 82%;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 50px;
`;
