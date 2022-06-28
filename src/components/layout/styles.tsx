import styled from 'styled-components';

const Container = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 100%;
`;

export default Container;
