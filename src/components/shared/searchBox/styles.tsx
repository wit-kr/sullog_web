import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 92vw;
  max-width: 470px;
  height: 40px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  font-size: 1.4rem;
  color: #ccc;
  margin-left: 6px;
`;

export const SearchIcon = styled.img``;

export const FilterButton = styled.button`
  cursor: grab;
`;

export const FilterIcon = styled.img``;
