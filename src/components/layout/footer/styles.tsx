import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  height: 13.6vh;
  max-height: 90px;
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65.5vw;
  max-width: 330px;
`;

export const SettingButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: column;
  text-align: center;
  > img {
    width: 6.4vw;
    max-width: 25px;
    height: auto;
  }
`;

export const RecommendButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const WriteButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 18vw;
  max-width: 65px;
  height: 18vw;
  max-height: 65px;
  background-color: #3E14B4;
  border-radius: 50%;
  bottom: 44px;
  color: white;
  font-size: 12px;
  > img {
    width: 4vw;
    max-width: 15px;
    height: auto;
  }
`;
