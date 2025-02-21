import { useMutation, useQueryClient } from 'react-query';
import api from '../../api/api';
import { Evento } from '../../types/evento';

interface ErrorResponse {
  message: string;
  response?: {
    status: number;
  };
}

export const useCreateEvento = () => {
  const queryClient = useQueryClient();

  return useMutation<
    Evento,
    ErrorResponse,
    void,
    { previousEventos: Evento[] | undefined; fakeEventoId: number }
  >({
    mutationFn: async () => {
      const response = await api.post<Evento>('/eventos');
      return response.data;
    },
    onMutate: async () => {
      await queryClient.cancelQueries('eventos');
      const previousEventos = queryClient.getQueryData<Evento[]>('eventos');

      const fakeEvento: Evento = {
        id: Date.now(),
        titulo: 'Evento',
        descripcion: '',
        fecha: '',
        hora_inicio: '',
        hora_fin: '',
        notificar: true,
        minutos_previos_notificacion: 15,
        created_at: '',
        updated_at: '',
        usuario_id: Math.random(),
      };

      queryClient.setQueryData<Evento[]>('eventos', (oldEventos = []) => [
        ...oldEventos,
        fakeEvento,
      ]);
      return { previousEventos, fakeEventoId: fakeEvento.id };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('eventos');
    },
    onSettled: (_data, error, _variables, context) => {
      if (error && context?.fakeEventoId) {
        queryClient.setQueryData<Evento[]>('eventos', (previousEventos = []) =>
          previousEventos.filter((evento) => evento.id !== context.fakeEventoId)
        );
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
