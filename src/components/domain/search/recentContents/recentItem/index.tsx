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
    <button
      type="button"
      onClick={() => console.log('이거 누르면 검색요청되게 하면 됨')}
    >
      {item}
    </button>
    <DeleteButton onClick={() => removeItem(item)}>
      <DeleteButtonIcon src="/image/icon/delete.svg" />
    </DeleteButton>
  </RecentItems>
);

export default RecentItem;
