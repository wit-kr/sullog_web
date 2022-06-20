import styled from 'styled-components';

export const Wrapper = styled.div`
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
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    padding: 0;
    background-color: transparent;
  }
`;

export const Logo = styled.img``;

export const Slogan = styled.img`
  width: 98px;
  margin-top: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-of-type {
    margin-bottom: 8px;
  }
  margin-bottom: 16px;
`;
