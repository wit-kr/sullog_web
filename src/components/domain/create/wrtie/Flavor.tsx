/* eslint-disable no-shadow,react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, SetStateAction } from 'react';
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

const renderThumb = (props: any, state: any) => (
  <StyledThumb {...props} isActive />
);

const renderTrack = (props: any, state: any) => {
  const StyledTrack = styled.div<{ index: number }>`
    top: 0;
    bottom: 0;
    background-color: ${(props) => (props.index > 0 ? '#ADADAD' : '#3E14B4')};
    border-radius: 999px;
  `;

  return <StyledTrack {...props} index={state.index} />;
};

const renderMark = (props: any) => (
  <StyledThumb {...props} isActive={props.key < props.value} />
);

const AlcoholFlavorSliderContainer = styled.div`
  flex: 1;
  margin-top: 20px;
`;

interface FlavorProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  data: number;
  setData?: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

const Flavor = ({
  label,
  minLabel,
  maxLabel,
  data,
  setData,
  disabled,
}: FlavorProps) => (
  <AlcoholFlavorInputContainer>
    <AlcoholFlavorLabel>{label}</AlcoholFlavorLabel>
    <AlcoholFlavorSliderContainer>
      <StyledSlider
        disabled={!!disabled}
        value={data}
        onChange={(value: number | readonly number[]) => {
          // eslint-disable-next-line no-unused-expressions
          setData ? setData(value as number) : null;
        }}
        renderTrack={renderTrack}
        renderThumb={renderThumb}
        renderMark={(props) => renderMark({ ...props, value: data })}
        marks
        min={0}
        max={4}
      />
      <AlcoholFlavorInputLabelContainer>
        <AlcoholFlavorInputLabel>{minLabel}</AlcoholFlavorInputLabel>
        <AlcoholFlavorInputLabel>{maxLabel}</AlcoholFlavorInputLabel>
      </AlcoholFlavorInputLabelContainer>
    </AlcoholFlavorSliderContainer>
  </AlcoholFlavorInputContainer>
);

export default Flavor;
