import { Button } from '@components/domain/search/filter/button/styles';
import { Dispatch, SetStateAction, useState } from 'react';

type buttonProps = {
  text: String;
};

const FilterButton = ({ text }: buttonProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const buttonClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Button isClicked={isClicked} onClick={buttonClicked}>
      {text}
    </Button>
  );
};

export default FilterButton;
