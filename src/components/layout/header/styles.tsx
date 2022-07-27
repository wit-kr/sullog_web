import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  height: 12.8vh;
  margin-top: 16px;
`;

export const Title = styled.img`
  width: 27vw;
  max-width: 120px;
  height: auto;
`;

export const HamburgerButton = styled.button`
  cursor: grab;
  position: absolute;
  right: 28px;
`;

export const Hamburger = styled.img`
  
  width: 5.5vw;
  max-width: 25px;
  height: auto;
`;
