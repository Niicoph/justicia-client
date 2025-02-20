import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import AddButton from '../../../components/AddButton/AddButton';
import { useGetEventos } from '../../../hooks/Eventos/useGetEventos';
import EventComing from '../../../components/Eventos/EventComing/EventComing';

export default function Calendario() {
  const { data: eventos } = useGetEventos();
  //   const [date, setDate] = useState<Date | undefined>(new Date());
  const [date, setDate] = useState(undefined);

  // Mapeamos eventos con información completa
  const eventoData =
    eventos?.map((evento) => {
      const [year, month, day] = evento.fecha.split('-').map(Number);
      const fecha = new Date(Date.UTC(year, month - 1, day));
      const [horas, minutos, segundos] = evento.hora_inicio
        .split(':')
        .map(Number);
      fecha.setUTCHours(horas, minutos, segundos, 0);

      return {
        date: fecha,
        title: evento.titulo,
        description: evento.descripcion,
        hora_inicio: evento.hora_inicio,
        hora_fin: evento.hora_fin,
      };
    }) || [];

  const eventDays = eventoData.map((evento) => evento.date);
  const eventoOrdenado = [...eventoData].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );

  return (
    <div className="flex flex-col h-full p-4 gap-4 lgCustom:bg-white border-b border-Jborder ">
      <AddButton action="Agregar evento" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={{
          eventDay: eventDays,
        }}
        className="rounded-md border border-Jborder w-full flex justify-center items-center"
      />
      <div className="flex justify-between items-center gap-4 h-full">
        {eventoOrdenado.slice(0, 2).map((evento, index) => (
          <EventComing key={index} evento={evento} />
        ))}
      </div>
    </div>
  );
}
