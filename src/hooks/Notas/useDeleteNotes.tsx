import { useQueryClient, useMutation } from 'react-query';
import api from '../../api/api';
import { Note } from '../../types/note';

interface ErrorResponse {
  message: string;
}

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Note,
    ErrorResponse,
    number,
    { previousNotes: Note[] | undefined }
  >({
    mutationFn: async (id) => {
      const response = await api.delete<Note>(`/notas/${id}`);
      return response.data;
    },
    onMutate: async (id) => {
      await queryClient.cancelQueries('notes');
      const previousNotes = queryClient.getQueryData<Note[]>('notes');
      queryClient.setQueryData<Note[]>('notes', (oldNotes = []) =>
        oldNotes.filter((note) => note.id !== id)
      );

      return { previousNotes };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('notes');
    },
    onSettled: (_data, error, _variables, context) => {
      if (error && context?.previousNotes) {
        queryClient.setQueryData('notes', context.previousNotes);
      }
    },
  });
};
