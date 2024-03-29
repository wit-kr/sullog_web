import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 13.6vh;
  max-height: 90px;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: #fff;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 65.5vw;
  max-width: 330px;
`;

export const FeedButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'NotoSansKRRegular';
  font-size: 1.2rem;
  text-align: center;
  > img {
    width: 8vw;
    max-width: 25px;
    margin-bottom: 5px;
  }
`;

export const RecommendButton = styled.button`
  cursor: grab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'NotoSansKRRegular';
  font-size: 1.2rem;
  text-align: center;
  > img {
    width: 8vw;
    max-width: 20px;
    margin-bottom: 5px;
  }
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
  background-color: #3e14b4;
  border-radius: 50%;
  bottom: 44px;
  color: white;
  font-family: 'NotoSansKRRegular';
  font-size: 12px;
  > img {
    width: 4vw;
    max-width: 15px;
    height: auto;
    margin-bottom: 5px;
  }
`;
