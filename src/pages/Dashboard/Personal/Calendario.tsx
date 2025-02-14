import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import Heading from '../../../components/Heading/Heading';

export default function Calendario() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col items-center h-3/4  py-6 px-4 gap-4 border-b border-Jborder">
      <div className="w-full flex justify-between h-6">
        <Heading message="Calendario"></Heading>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-Jborder w-full flex justify-center items-center h-80"
      />
    </div>
  );
}
