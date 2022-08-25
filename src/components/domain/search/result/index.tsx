import { useState } from 'react';
import NoResult from '@components/domain/search/noResult';
import Item from '@components/domain/experience/item';
import { useRecoilValue } from 'recoil';
import { expState } from '../../../../atom/atoms';

const Result = () => (
  // if (Object.keys(data).length === 0) {
  //   return <NoResult />;
  // }
  <Item />
);
export default Result;
