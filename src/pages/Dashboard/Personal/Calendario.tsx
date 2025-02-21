import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { useGetEventos } from '../../../hooks/Eventos/useGetEventos';
import EventComing from '../../../components/Eventos/EventComing/EventComing';
import EventDialog from '../../../components/Eventos/EventDialog/EventDialog';
import AddButton from '../../../components/AddButton/AddButton';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Calendario() {
  const { data: eventos } = useGetEventos();
  //   const [date, setDate] = useState<Date | undefined>(new Date());
  const [date, setDate] = useState(undefined);

  // Transladar Logica de eventos a hook useGetEventos
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
  ); // eventos ordenamos por fecha.

  const filteredEvents = eventoOrdenado.filter((evento) => {
    // date: Date Thu Feb 20 2025 08:30:00 GMT-0300 (Argentina Standard Time)
    const eventoDate = evento.date;
    const currentDate = new Date();
    // filtramos los eventos que sean menores a la fecha actual (es decir, evento que ya han pasado)
    return eventoDate >= currentDate;
  });

  return (
    <div className="flex flex-col h-full p-4 gap-4 lgCustom:bg-white border-b border-Jborder ">
      <EventDialog /> {/* Contains add button */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={{
          eventDay: eventDays,
        }}
        className="rounded-2xl border border-Jborder w-full flex justify-center items-center"
        classNames={{
          day_selected: 'bg-slate-100 text-black border border-slate-200',
          day_today: 'bg-[#2160e1] text-white ',
        }}
        modifiersClassNames={{
          eventDay: 'border-2 border-[#2160e1] hover:text-[#2160e1]',
        }}
      />
      <div className="flex justify-between items-center gap-4 h-full">
        {filteredEvents.slice(0, 2).map((evento, index) => (
          <EventComing key={index} evento={evento} />
        ))}
      </div>
    </div>
  );
}
