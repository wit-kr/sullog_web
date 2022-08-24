import { axios } from 'pages/_app';
import { useQuery } from 'react-query';
import { Experience, SullogResponse } from '../types/sullog.interface';

interface fetchExperienceProps {
  userSeq: number;
  alcholSeq: number;
}

export const fetchExperience = async ({
  userSeq,
  alcholSeq,
}: fetchExperienceProps): Promise<SullogResponse<Experience>> => {
  const res = await axios.get(
    `/record/getRecords?user_seq=${userSeq}&${alcholSeq}`
  );
  return res.data;
};

export const useSearchExp = ({ userSeq, alcholSeq }: fetchExperienceProps) => {
  useQuery([userSeq], () => fetchExperience({ userSeq, alcholSeq }));
};
