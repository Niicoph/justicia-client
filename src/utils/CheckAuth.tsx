import { useQueryClient } from 'react-query';

export const CheckAuth = () => {
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData('user');
  return user ? true : false;
};
