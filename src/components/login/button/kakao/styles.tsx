import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 48px;
  background-color: #fee500;
  border-radius: 6px;
  > p {
    font-size: 16px;
  }
`;

export const Icon = styled.img`
  position: absolute;
`;
