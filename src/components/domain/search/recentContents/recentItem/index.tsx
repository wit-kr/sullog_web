import {
  DeleteButton,
  DeleteButtonIcon,
  RecentItems,
} from '@components/domain/search//recentContents/recentItem/styles';

type recentItemProps = {
  item: string;
  id: string;
  removeItem: (id: any) => void;
};

const RecentItem = ({ item, id, removeItem }: recentItemProps) => (
  <RecentItems>
    {item}
    <DeleteButton onClick={() => removeItem(item)}>
      <DeleteButtonIcon src="/image/icon/delete.svg" />
    </DeleteButton>
  </RecentItems>
);

export default RecentItem;