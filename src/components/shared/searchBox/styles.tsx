import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 92vw;
  max-width: 470px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 24px;
`;

export const SearchButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  max-width: 400px;
`;

export const SearchIcon = styled.img`
  margin-right: 5px;
`;

export const SearchButtonTitle = styled.p`
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: #ccc;
`;

export const FilterButton = styled.button`
  cursor: grab;
`;

export const FilterIcon = styled.img<{ isFilterShow: boolean }>`
  filter: ${(props) =>
    props.isFilterShow ? null : 'grayscale(1) opacity(0.5)'};
`;
