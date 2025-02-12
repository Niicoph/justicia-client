import { useQuery } from 'react-query';
import api from '../../api/api';
import { User } from '../../types/user';

const getUser = async () => {
  const response = await api.get<User>('/auth/userAuth');
  return response.data;
};

export const useGetUser = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: false,
  });
};
