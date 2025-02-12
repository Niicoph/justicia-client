import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';

interface ErrorResponse {
  message: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<
    string,
    {
      message: string;
      email: string;
      password: string;
    },
    ErrorResponse
  >({
    mutationFn: async (data) => {
      const response = await api.post<string>('/auth/login', data);
      return response.data;
    },
    onSuccess: (data: string) => {
      queryClient.setQueryData('user', data);
      console.log(data);
    },
  });
};
