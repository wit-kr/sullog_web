import styled, { css, keyframes } from 'styled-components';

const WrapperFadeIn = keyframes`
  0% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  max-width: 400px;
  margin-top: 12px;
  animation: ${WrapperFadeIn} 0.5s;
`;
