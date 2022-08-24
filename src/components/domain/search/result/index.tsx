import { useState } from 'react';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/experience/item';

const Result = ({ test }: any) => {
  if (!test.isSuccess) {
    return <NoResult />;
  }
  return <Item />;
};

export default Result;
