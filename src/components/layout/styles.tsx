import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 9999;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
  background-color: #ffffff;
`;

export default Container;
