import { Wrapper } from '@components/domain/search/filter/styles';
import Button from '@components/domain/search/filter/button';

const FilterModal = () => {
  const drinkData = ['소주', '과실주', '막걸리', '기타', '전체'];
  return (
    <Wrapper>
      {drinkData.map((drink) => (
        <Button key={drink} text={drink} />
      ))}
    </Wrapper>
  );
};

export default FilterModal;
