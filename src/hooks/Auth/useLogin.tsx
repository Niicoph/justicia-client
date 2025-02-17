import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';
import { User } from '../../types/user';

interface ErrorResponse {
  message: string;
}
interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<User, ErrorResponse, LoginData>({
    mutationFn: async (data: LoginData) => {
      const response = await api.post<User>('/auth/login', data);
      return response.data;
    },
    onSuccess: async (data) => {
      window.location.href = '/dashboard';
      queryClient.setQueryData('user', data);
    },
  });
};
