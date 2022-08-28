import {
  DeleteButton,
  DeleteButtonIcon,
  RecentItems,
} from '@components/domain/search//recentContents/recentItem/styles';
import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useEffect, useState } from 'react';
import { useSearchExpWithKeyword } from '../../../../../hooks/useSearchExpWithKeyword';

type recentItemProps = {
  item: string;
  id: string;
  removeItem: (id: any) => void;
  setData: (data: any) => void;
  isSubmit: boolean;
  setIsSubmit: (isSubmit: boolean) => void;
};

const RecentItem = ({
  item,
  removeItem,
  setData,
  isSubmit,
  setIsSubmit,
}: recentItemProps) => {
  // 유저 시퀀스 가져오기
  const { user } = useAuth();
  const seq = user?.seq;

  const { data, refetch, isLoading } = useSearchExpWithKeyword({
    userSeq: seq!,
    keyword: item,
    options: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: false,
    },
  });

  useEffect(() => {
    if (data) {
      setData(data?.data);
    }
    if (isLoading) {
      setData(undefined);
    }
  }, [data, isLoading]);

  const searchRecentItem = (e: any) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    refetch();
  };

  return (
    <RecentItems>
      <button type="button" onClick={searchRecentItem}>
        {item}
      </button>
      <DeleteButton onClick={() => removeItem(item)}>
        <DeleteButtonIcon src="/image/icon/delete.svg" />
      </DeleteButton>
    </RecentItems>
  );
};

export default RecentItem;
