import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';
import { Note } from '../../types/note';

interface ErrorResponse {
  message: string;
}

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Note,
    ErrorResponse,
    void,
    { previousNotes: Note[] | undefined; fakeNoteId: number }
  >({
    mutationFn: async () => {
      const response = await api.post<Note>('/notas');
      return response.data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries('notes');
      const previousNotes = queryClient.getQueryData<Note[]>('notes');

      const fakeNote: Note = {
        id: Date.now(),
        titulo: 'Nota',
        descripcion: '',
        usuario_id: Math.random(),
      };

      queryClient.setQueryData<Note[]>('notes', (oldNotes = []) => [
        ...oldNotes,
        fakeNote,
      ]);

      return { previousNotes, fakeNoteId: fakeNote.id };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('notes');
    },
    onSettled: (_data, error, _variables, context) => {
      if (error && context?.fakeNoteId) {
        queryClient.setQueryData<Note[]>('notes', (previousNotes = []) =>
          previousNotes.filter((note) => note.id !== context.fakeNoteId)
        );
      }
    },
  });
};
