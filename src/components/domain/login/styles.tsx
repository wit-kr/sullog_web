import styled from 'styled-components';

export const Wrapper = styled.div`
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
    font-family: 'NotoSansKR';
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 1.6rem;
    color: #bbbbbb;
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
  > button:first-of-type {
    margin-bottom: 8px;
  }
  margin-bottom: 16px;
`;
