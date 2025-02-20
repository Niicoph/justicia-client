import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import AddButton from '../../../components/AddButton/AddButton';

export default function Calendario() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col h-full p-4 gap-2 lgCustom:bg-white border-b border-Jborder ">
      <AddButton action="Agregar evento" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-Jborder w-full flex justify-center items-center"
      />
      <div className="flex justify-between items-center gap-4 h-full border border-Jborder rounded-md"></div>
    </div>
  );
}
