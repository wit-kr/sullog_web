import { useState } from 'react';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/experience/item';

const Result = () => {
  const [isData, setIsData] = useState<boolean>(true);
  if (!isData) {
    return <NoResult />;
  }
  return <Item />;
};

export default Result;
