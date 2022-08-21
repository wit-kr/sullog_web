/* eslint-disable function-paren-newline */
import { axios } from 'pages/_app';
import { useQuery } from 'react-query';
import { Alchol, SullogResponse } from 'types/sullog.interface';

interface GetAlcholsParams {
  pageNum: number;
  pageSize: number;
}

export const fetchGetAlcohols = async ({
  pageNum,
  pageSize,
}: GetAlcholsParams): Promise<SullogResponse<Alchol>> => {
  const res = await axios.get(
    `/alchol/getAlchols?pageNum=${pageNum}&pageSize=${pageSize}`
  );
  return res.data;
};

export const useGetAlcohols = ({ pageNum, pageSize }: GetAlcholsParams) =>
  useQuery(['alchol', 'getAlchols', pageNum, pageSize], () =>
    fetchGetAlcohols({ pageNum, pageSize })
  );
