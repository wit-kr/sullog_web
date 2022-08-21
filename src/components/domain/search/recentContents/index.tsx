import {} from '@components/domain/search/modal/styles';
import {
  DeleteAllButton,
  RecentContentsTitle,
  RecentContentsTitleBox,
  RecentContentsWrapper,
  RecentItemsBox,
} from '@components/domain/search/recentContents/styles';
import RecentItem from '@components/domain/search/recentContents/recentItem';
import { useEffect, useState } from 'react';

type recentContentsProps = {
  searchArr: string[];
  setSearchArr: (searchArr: string[]) => void;
};

const RecentContents = ({ searchArr, setSearchArr }: recentContentsProps) => {
  const removeItem = (item: any) => {
    const newArr = searchArr.filter((search) => search !== item);
    setSearchArr(newArr);
    localStorage.setItem('search', JSON.stringify(newArr));
  };
  const removeAllItems = () => {
    const newArr: string[] = [];
    setSearchArr(newArr);
    localStorage.setItem('search', JSON.stringify(newArr));
  };

  useEffect(() => {
    setSearchArr(JSON.parse(localStorage.getItem('search')!));
  }, [setSearchArr]);
  return (
    <RecentContentsWrapper>
      <RecentContentsTitleBox>
        <RecentContentsTitle>최근 검색어</RecentContentsTitle>
        <DeleteAllButton onClick={removeAllItems}>모두 지우기</DeleteAllButton>
      </RecentContentsTitleBox>
      <RecentItemsBox>
        {searchArr?.map((item, i) => (
          <RecentItem
            key={i.toString() + item}
            item={item}
            id={i.toString() + item}
            removeItem={removeItem}
          />
        ))}
      </RecentItemsBox>
    </RecentContentsWrapper>
  );
};

export default RecentContents;
