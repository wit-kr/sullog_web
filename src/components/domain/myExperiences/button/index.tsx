import {
  FilterButton,
  FilterImg,
} from '@components/domain/myExperiences/button/styles';
import { useState } from 'react';

const Button = ({ drink }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const onClickFilterButton = () => {
    setIsClicked(!isClicked);
  };

  return (
    <FilterButton onClick={onClickFilterButton}>
      {isClicked ? (
        <FilterImg src={`/image/exp/click/${drink}.svg`} />
      ) : (
        <FilterImg src={`/image/exp/nonclick/${drink}.svg`} />
      )}
    </FilterButton>
  );
};
export default Button;
