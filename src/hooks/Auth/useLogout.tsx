import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';

interface ErrorResponse {
  message: string;
}

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<ErrorResponse>({
    mutationFn: async () => {
      const response = await api.post<ErrorResponse>('/auth/logout');
      return response.data;
    },
    onSuccess: async () => {
      window.location.href = '/login';
      queryClient.clear();
    },
  });
};
