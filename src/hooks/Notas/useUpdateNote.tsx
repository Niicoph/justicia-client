import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';
import { Note } from '../../types/note';

interface ErrorResponse {
  message: string;
  response?: {
    status: number;
  };
}

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Note,
    ErrorResponse,
    { data: Note },
    { previousNotes: Note[] | undefined; note: Note | undefined }
  >({
    mutationFn: async ({ data }) => {
      const response = await api.put<Note>(
        `/notas/${data.id}?_method=PUT`,
        data
      );
      return response.data;
    },
    onMutate: async ({ data }) => {
      await queryClient.cancelQueries('notes');
      const previousNotes = queryClient.getQueryData<Note[]>('notes');
      const note = previousNotes?.find((note) => note.id === data.id);
      return { previousNotes, note };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('notes');
    },
    onSettled: (_data, error, _variables, context) => {
      if (error && context?.previousNotes) {
        queryClient.setQueryData('notes', context.previousNotes);
      }
    },
    // in case the token has expired, redirect to login
    onError: (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          window.location.href = '/login';
        }
      }
    },
  });
};
