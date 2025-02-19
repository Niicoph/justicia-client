import api from '../../api/api';
import { Note } from '../../types/note';
import { useQuery } from 'react-query';

const fetchNotes = async () => {
  const response = await api.get<Note[]>('/notas');
  return response.data;
};

export const useGetNotes = () => {
  return useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });
};
