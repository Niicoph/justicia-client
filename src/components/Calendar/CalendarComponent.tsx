import {
  Calendar as BigCalendar,
  dateFnsLocalizer,
  Views,
} from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const locales = { es };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const messages = {
  today: 'Hoy',
  previous: 'Anterior',
  next: 'Siguiente',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  noEventsInRange: 'No hay eventos en este rango.',
  showMore: (total: number) => `+ Ver más (${total})`,
};

const formats = {
  dateFormat: 'd',
  dayFormat: (date: Date) => format(date, 'EEE', { locale: es }), // Lun, Mar, Mié...
  weekdayFormat: (date: Date) => format(date, 'EEEE', { locale: es }), // Lunes, Martes...
  monthHeaderFormat: (date: Date) => format(date, 'MMMM yyyy', { locale: es }), // Febrero 2025
  dayHeaderFormat: (date: Date) => format(date, 'EEEE dd MMMM', { locale: es }), // Lunes 12 Febrero
  timeGutterFormat: (date: Date) => format(date, 'HH:mm', { locale: es }), // Formato 24h
};

const testEvents = [
  {
    id: 1,
    title: 'Reunión con equipo',
    start: new Date(2025, 1, 11, 10, 50),
    end: new Date(2025, 1, 11, 11, 30),
  },
  {
    id: 2,
    title: 'Entrega de proyecto',
    start: new Date(2025, 1, 15, 14, 0),
    end: new Date(2025, 1, 15, 15, 0),
  },
];

export default function CalendarComponent() {
  const [view, setView] = useState(Views.MONTH);

  return (
    <div className="h-[600px] rounded-xl">
      <BigCalendar
        localizer={localizer}
        events={testEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        views={[Views.MONTH, Views.WEEK, Views.DAY]}
        view={view}
        onView={setView}
        messages={messages} // <-- AÑADIMOS LA TRADUCCIÓN AQUÍ
        formats={formats} // <-- AÑADIMOS LOS FORMATOS DE FECHA AQUÍ
        className="custom-calendar"
        eventPropGetter={eventStyleGetter}
        components={{ toolbar: CustomToolbar }}
      />
    </div>
  );
}

const eventStyleGetter = (event: any) => {
  return {
    className: 'bg-red-500 text-white p-2 rounded-md shadow-md',
    style: { borderLeft: '5px solid red' },
  };
};

const CustomToolbar = (toolbar: any) => {
  return (
    <div className="flex items-center justify-between pb-4">
      {/* Botón de navegación */}
      <div className="flex space-x-2">
        <button onClick={() => toolbar.onNavigate('PREV')}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/arrow.png"
            alt=""
            className="rotate-180"
            width={20}
            height={20}
          />
        </button>
        <span className="font-bold">{toolbar.label}</span>
        <button onClick={() => toolbar.onNavigate('NEXT')}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/arrow.png"
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className="flex space-x-2">
        {toolbar.views.map((view: string) => (
          <button
            key={view}
            onClick={() => toolbar.onView(view)}
            className="bg-Jmain h-8 w-8 flex justify-center items-center rounded-md"
          >
            {view === 'month' ? (
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/month-view.png"
                width={20}
                height={20}
              />
            ) : view === 'week' ? (
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/week-view.png"
                width={20}
                height={20}
              />
            ) : (
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/day-view.png"
                width={20}
                height={20}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
