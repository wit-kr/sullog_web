import { axios } from 'pages/_app';
import { useQuery } from 'react-query';

export const fetchSearchAlcohols = async () => {
  const res = await axios.get('/alchol/getAlchols?pageNum=1&pageSize=10');
  return res.data;
};

export const useSearchAlcohols = () =>
  useQuery(['alchol', 'getAlchols'], fetchSearchAlcohols);
