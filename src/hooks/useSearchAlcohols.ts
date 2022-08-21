/* eslint-disable function-paren-newline */
import { axios } from 'pages/_app';
import { useQuery } from 'react-query';
import { Alchol, SullogResponse } from 'types/sullog.interface';

interface SearchAlcholsParams {
  pageNum: number;
  pageSize: number;
  keyword: string;
}

export const fetchSearchAlcohols = async ({
  pageNum,
  pageSize,
  keyword,
}: SearchAlcholsParams): Promise<SullogResponse<Alchol>> => {
  const res = await axios.get(
    `/alchol/searchAlchols?pageNum=${pageNum}&pageSize=${pageSize}&keyword=${keyword}`
  );
  return res.data;
};

export const useSearchAlcohols = ({
  pageNum,
  pageSize,
  keyword,
}: SearchAlcholsParams) =>
  useQuery(['alchol', 'searchAlchols', pageNum, pageSize, keyword], () =>
    fetchSearchAlcohols({ pageNum, pageSize, keyword })
  );
