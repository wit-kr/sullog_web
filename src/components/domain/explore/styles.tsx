import styled from 'styled-components';

export const NoDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
`;

export const NoDataTitle = styled.h1`
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: #b0b0b0;
`;

export const DataWrapper = styled.div`
  overflow: scroll;
  margin-top: 20px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 2px;
  row-gap: 2px;
  padding-bottom: 90px;
`;

export const ExperienceBox = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
`;
