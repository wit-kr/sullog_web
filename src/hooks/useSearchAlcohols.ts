/* eslint-disable function-paren-newline */
import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import { Alchol, SullogResponse } from 'types/sullog.interface';

interface SearchAlcholsParams {
  pageNum: number;
  pageSize: number;
  keyword: string;
  options: Omit<
    UseQueryOptions<
      SullogResponse<Alchol>,
      unknown,
      SullogResponse<Alchol>,
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
}): Promise<SullogResponse<Alchol>> => {
  const res = await axios.get(
    `/alchol/searchAlchols?pageNum=${pageNum}&pageSize=${pageSize}&keyword=${keyword}`
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
