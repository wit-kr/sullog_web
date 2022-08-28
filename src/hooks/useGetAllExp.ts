import { axios } from 'pages/_app';
import { useQuery, UseQueryOptions } from 'react-query';
import { SullogAllExpResponse } from '../types/sullog.interface';

export const fetchOneExperience = async (): Promise<SullogAllExpResponse> => {
  const { data } = await axios('/record/getAllRecords');
  return data;
};

export const useGetAllExp = () =>
  useQuery(['searchAllExp'], () => fetchOneExperience());
