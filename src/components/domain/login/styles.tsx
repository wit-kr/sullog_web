import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  background-color: #3e14b4;
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
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 31vh;
  }
  > div:last-child {
    margin-bottom: 4vh;
  }
`;

export const Description = styled.p`
  text-align: center;
  color: #bbb;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6rem;
  white-space: pre-line;
  button {
    color: #bbbbbb;
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'NotoSansKR';
    line-height: 1.6rem;
  }
`;

export const Logo = styled.img`
  width: 38.8vw;
  max-width: 150px;
  margin-left: 15px;
  height: auto;
`;

export const Slogan = styled.img`
  width: 36vw;
  max-width: 140px;
  margin-top: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Button = styled.a<{ backgroundColor: string; color: string }>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 91.6vw;
  max-width: 500px;
  height: 48px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 6px;
  font-size: 16px;
  color: ${({ color }) => color};
  text-decoration: none;
`;

export const Icon = styled.img`
  position: absolute;
  left: 20px;
`;
