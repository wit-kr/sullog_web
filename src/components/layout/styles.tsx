import styled from 'styled-components';

export const Container = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

export const PlusButton = styled.button`
  position: absolute;
  bottom: 60px;
  font-size: 1rem;
`;
