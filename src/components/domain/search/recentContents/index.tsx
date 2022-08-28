import {
  DeleteAllButton,
  RecentContentsTitle,
  RecentContentsTitleBox,
  RecentContentsWrapper,
  RecentItemsBox,
} from '@components/domain/search/recentContents/styles';
import RecentItem from '@components/domain/search/recentContents/recentItem';
import { useEffect } from 'react';

type recentContentsProps = {
  searchArr: string[];
  setSearchArr: (searchArr: string[]) => void;
  setData: (data: any) => void;
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
};

const RecentContents = ({
  searchArr,
  setSearchArr,
  setData,
  isSubmit,
  setIsSubmit,
}: recentContentsProps) => {
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
            removeItem={removeItem}
            setData={setData}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
          />
        ))}
      </RecentItemsBox>
    </RecentContentsWrapper>
  );
};

export default RecentContents;
