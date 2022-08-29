/* eslint-disable no-shadow */
import { useState } from 'react';
import { ExperienceBox, ExperienceImg } from './styles';

const Box = ({ exp }: { exp: any }) => {
  const [isError, setIsError] = useState(false);

  return (
    <ExperienceBox isError={isError}>
      <ExperienceImg
        src={`data:image/png;base64,${exp.image_byte}`}
        onError={() => setIsError(true)}
      />
    </ExperienceBox>
  );
};

export default Box;
