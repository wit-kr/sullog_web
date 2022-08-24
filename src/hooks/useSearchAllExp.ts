import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import { Experience, SullogResponse } from '../types/sullog.interface';

interface SearchExperiencesProps {
  userSeq: number;
  keyword: string;
  options: Omit<
    UseQueryOptions<
      SullogResponse<Experience>,
      unknown,
      SullogResponse<Experience>,
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
}): Promise<SullogResponse<Experience>> => {
  const { data } = await axios(
    encodeURI(`/record/searchRecord?user_seq=${userSeq}&keyword=${keyword}`)
  );
  return data;
};

export const useSearchAllExp = ({
  userSeq,
  keyword,
  options,
}: SearchExperiencesProps) =>
  useQuery(
    ['searchAllExp', userSeq, keyword],
    () => fetchExperiences({ userSeq, keyword }),
    options
  );
