import api from '../../api/api';
import { Evento } from '../../types/evento';
import { useQuery } from 'react-query';

const fetchEventos = async () => {
  const response = await api.get<Evento[]>('/eventos');
  return response.data;
};

export const useGetEventos = () => {
  return useQuery({
    queryKey: ['eventos'],
    queryFn: fetchEventos,
    staleTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

// created_at: "2025-02-18T11:41:01.000000Z"
// descripcion: "Non corporis quidem dignissimos quis aperiam impedit."
// fecha: "2017-05-31"
// hora_fin: "05:31:21"
// hora_inicio: "06:55:01"
// id: 10
// minutos_previos_notificacion: 5
// notificar: 0
// titulo: "voluptatem"
// updated_at: "2025-02-18T11:41:01.000000Z"
