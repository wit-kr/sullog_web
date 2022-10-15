import ReactSlider from 'react-slider';
import styled from 'styled-components';

const AlcoholFlavorLabel = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 2.6rem;
  color: #adadad;
  width: 2.4rem;
`; // 향, 맛, 감촉

const AlcoholFlavorInputContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const AlcoholFlavorInputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AlcoholFlavorInputLabel = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #adadad;
`; // 별로다, 좋다

const StyledSlider = styled(ReactSlider)`
  flex: 1;
  width: 100%;
  height: 2px;
  margin-bottom: 8px;
`;

const StyledThumb = styled.div<{ isActive: boolean }>`
  height: 10px;
  width: 10px;
  bottom: -4px;
  background-color: ${(props) => (props.isActive ? '#3E14B4' : '#ADADAD')};
  border-radius: 50%;
  cursor: grab;
`;

const AlcoholFlavorSliderContainer = styled.div`
  flex: 1;
  margin-top: 20px;
`;

export {
  AlcoholFlavorLabel,
  AlcoholFlavorInputContainer,
  AlcoholFlavorInputLabelContainer,
  AlcoholFlavorInputLabel,
  StyledSlider,
  StyledThumb,
  AlcoholFlavorSliderContainer,
};
