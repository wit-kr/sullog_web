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
  padding: 10px 24px;
`;

export const SearchForm = styled.form``;

export const SearchInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  max-width: 400px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.4rem;
`;

export const CancelButton = styled.button`
  cursor: grab;
`;

export const CancelIcon = styled.img``;
