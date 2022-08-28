import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 1.6rem 2rem;
`;

export const HeaderButton = styled.button`
  cursor: grab;
  position: absolute;
  padding: 0 0.8rem;
`;

export const BackButtonIcon = styled.img``;

export const TitleImage = styled.img`
  width: 27vw;
  max-width: 120px;
  height: auto;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 26px;
  color: #000000;
`;

export const HeaderRightText = styled.span<{ disabled: boolean }>`
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: ${({ disabled }) => (disabled ? 'rgba(169, 12, 12, 0.3)' : '#000000')};
`;
