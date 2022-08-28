import Item from '@components/domain/experience/item';
import { Experience } from '../../../../types/sullog.interface';

const Result = ({ ...item }: Experience) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Item {...item} />
);
export default Result;
