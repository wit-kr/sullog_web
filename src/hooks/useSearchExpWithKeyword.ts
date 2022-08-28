import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import {
  Experience,
  SullogExpResponse,
  SullogResponse,
} from '../types/sullog.interface';

interface SearchExperiencesProps {
  userSeq: number;
  keyword: string;
  options: Omit<
    UseQueryOptions<
      SullogExpResponse,
      unknown,
      SullogExpResponse,
      (string | number)[]
    >,
    'queryKey' | 'queryFn'
  >;
}

export const fetchExperiences = async ({
  userSeq,
  keyword,
}: {
  userSeq: number;
  keyword: string;
}): Promise<SullogExpResponse> => {
  const { data } = await axios(
    `/record/searchRecord?user_seq=${userSeq}&keyword=${keyword}`
  );
  return data;
};

export const useSearchExpWithKeyword = ({
  userSeq,
  keyword,
  options,
}: SearchExperiencesProps) =>
  useQuery(
    ['searchAllExp'],
    () => fetchExperiences({ userSeq, keyword }),
    options
  );
