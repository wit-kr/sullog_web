import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import { SullogOneExpResponse } from '../types/sullog.interface';
import { fetchExperiences } from './useSearchExpWithKeyword';

interface GetOneExpProps {
  userSeq: number;
  alcholSeq: number;
  options: Omit<
    UseQueryOptions<
      SullogOneExpResponse,
      unknown,
      SullogOneExpResponse,
      (string | number)[]
    >,
    'queryKey' | 'queryFn'
  >;
}

export const fetchOneExperience = async ({
  userSeq,
  alcholSeq,
}: {
  userSeq: number;
  alcholSeq: number;
}): Promise<SullogOneExpResponse> => {
  const { data } = await axios(
    `/record/getRecord?user_seq=${userSeq}&alchol_seq=${alcholSeq}`
  );
  return data;
};

export const useGetOneExp = ({ userSeq, alcholSeq, options }: GetOneExpProps) =>
  useQuery(
    ['searchAllExp'],
    () => fetchOneExperience({ userSeq, alcholSeq }),
    options
  );
