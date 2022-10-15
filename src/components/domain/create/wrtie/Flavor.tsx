/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow,react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import {
  StyledThumb,
  AlcoholFlavorInputContainer,
  AlcoholFlavorLabel,
  StyledSlider,
  AlcoholFlavorInputLabelContainer,
  AlcoholFlavorInputLabel,
  AlcoholFlavorSliderContainer,
} from './Flavor.style';

interface FlavorProps {
  label: string;
  minLabel: string;
  maxLabel: string;
  data: number;
  setData?: Dispatch<SetStateAction<number>>;
  disabled?: boolean;
}

const renderThumb = (props: any) => <StyledThumb {...props} isActive />;

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

const Flavor = ({
  label,
  minLabel,
  maxLabel,
  data,
  setData,
  disabled,
}: FlavorProps) => {
  return (
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
};

export default Flavor;
