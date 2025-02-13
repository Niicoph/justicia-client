import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';

interface ErrorResponse {
  message: string;
}
interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<string, ErrorResponse, LoginData>({
    mutationFn: async (data: LoginData) => {
      const response = await api.post<string>('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData('user', data);
      console.log(data);
    },
  });
};
