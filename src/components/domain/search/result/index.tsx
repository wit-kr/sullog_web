import Item from '@components/domain/experience/item';
import { Experience } from '../../../../types/sullog.interface';

const Result = ({ ...item }: Experience) => {
  console.log(item);
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Item {...item} />;
};
export default Result;
