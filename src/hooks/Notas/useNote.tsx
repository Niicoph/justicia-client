import { useMutation } from 'react-query';
import api from '../../api/api';
import { Note } from '../../types/note';

interface ErrorResponse {
  message: string;
}
interface NoteData {
  titulo: string;
  descripcion: string;
}

export const useNote = () => {
  return useMutation<Note, ErrorResponse, NoteData>({
    mutationFn: async (data: NoteData) => {
      const response = await api.post<Note>('/notas', data);
      return response.data;
    },
  });
};
