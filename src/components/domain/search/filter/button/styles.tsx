import styled from 'styled-components';

type buttonProps = {
  isClicked: boolean;
};

export const Button = styled.button<buttonProps>`
  background: ${(props) => (props.isClicked ? '#3e14b4' : '#fff')};
  cursor: grab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 26px;
  border: 0.5px solid #8574b5;
  border-radius: 20px;
  font-family: 'NotoSansKRRegular';
  font-size: 1.2rem;
  font-weight: 350;
  color: ${(props) => (props.isClicked ? '#fff' : '#3a3a3a')};
`;
