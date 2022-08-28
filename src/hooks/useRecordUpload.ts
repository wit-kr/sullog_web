/* eslint-disable camelcase */
import { axios } from 'pages/_app';
import { useMutation } from 'react-query';

interface PostRecordProps {
  user_seq: number;
  alchol_seq: number;
  star: number;
  abv: string;
  incense: string;
  taste: string;
  texture: string;
  time: string;
  flower: string;
  fruit: string;
  grain: string;
  nut: string;
  sweetness: string;
  dairy: string;
  etc: string;
}

const postRecord = (record: PostRecordProps) =>
  axios({
    method: 'put',
    url: '/record/updateRecord',
    data: JSON.stringify(record),
    headers: {
      'Content-Type': 'application/json',
    },
  });

const useRecordUpload = () => useMutation(postRecord);

export { useRecordUpload };
