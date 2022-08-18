import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  background-color: #fff;
  position: absolute;
  z-index: 99;
  right: 0;
  width: 83.3vw;
  max-width: 445px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  cursor: grab;
  margin-top: 70px;
  margin-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 16px;
  height: 16px;
`;

export const CloseImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-top: 110px;
  padding-bottom: 80px;
`;

export const TextBox = styled.div``;

export const NickName = styled.span`
  font-family: 'NotoSansKRRegular';
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.2rem;
  color: #3e14b4;
`;

export const Welcome = styled.span`
  font-family: 'NotoSansKRRegular';
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

export const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
`;

export const TitleImage = styled.img`
  width: 25vw;
  max-width: 100px;
  height: auto;
`;

export const ChartBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  max-width: 230px;
  height: auto;
`;

export const Description = styled.p`
  font-family: 'NotoSansKRRegular';
  line-height: 1.6rem;
  font-size: 0.9rem;
  font-weight: 350;
  color: #999;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;
