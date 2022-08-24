/* eslint-disable function-paren-newline */
import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import { AlcoholInterface, SullogResponse } from 'types/sullog.interface';

interface SearchAlcholsParams {
  pageNum: number;
  pageSize: number;
  keyword: string;
  options: Omit<
    UseQueryOptions<
      SullogResponse<AlcoholInterface>,
      unknown,
      SullogResponse<AlcoholInterface>,
      (string | number)[]
    >,
    'queryKey' | 'queryFn'
  >;
}

export const fetchSearchAlcohols = async ({
  pageNum,
  pageSize,
  keyword,
}: {
  pageNum: number;
  pageSize: number;
  keyword: string;
}): Promise<SullogResponse<AlcoholInterface>> => {
  const res = await axios.get(
    `/alchol/searchAlchols?pageNum=${pageNum}&pageSize=${pageSize}&keyword=${keyword}`,
    { withCredentials: true }
  );
  return res.data;
};

export const useSearchAlcohols = ({
  pageNum,
  pageSize,
  keyword,
  options,
}: SearchAlcholsParams) =>
  useQuery(
    ['alchol', 'searchAlchols', pageNum, pageSize, keyword],
    () => fetchSearchAlcohols({ pageNum, pageSize, keyword }),
    options
  );
