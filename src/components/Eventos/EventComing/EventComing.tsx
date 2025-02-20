type EventoComingProps = {
  evento: {
    date: Date;
    title: string;
    description: string | null;
    hora_inicio: string;
    hora_fin: string;
  };
};

export default function EventComing({ evento }: EventoComingProps) {
  const eventoDate = new Date(
    evento.date.getFullYear(),
    evento.date.getMonth(),
    evento.date.getDate()
  );
  const currentDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  );

  const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  let fullDay = days[evento.date.getDay()];
  if (eventoDate.getTime() === currentDate.getTime()) {
    fullDay = 'Hoy';
  }

  const formatHour = (hora: string): string => {
    const [horas, minutos] = hora.split(':').map(Number);
    const ampm = horas >= 12 ? 'PM' : 'AM';
    const horas12 = horas % 12 || 12;
    return `${horas12}:${minutos.toString().padStart(2, '0')} ${ampm}`;
  };

  // limitamos la cantidad de caracteres a mostrar en el titulo
  if (evento.title.length > 15) {
    evento.title = evento.title.slice(0, 15) + '...';
  }

  return (
    <div
      className={`flex h-full w-full text-[#181f4e] border-l-4 border-Jmain rounded-lg  p-4 gap-2 hover:cursor-pointer hover:shadow-lg ${eventoDate.getTime() !== currentDate.getTime() ? 'text-[#B3B3B3] border-[#B3B3B3] bg-[#F2F2F2]' : 'bg-[#c3dbff]'}`}
    >
      <div
        className={`w-1/4 flex flex-col items-center justify-center inter-lightbold text-xl`}
      >
        <p>{fullDay}</p>
        <p>{evento.date.getDate()}</p>
      </div>
      <div className="w-full flex flex-col items-start justify-center inter-semibold text-[12px]">
        <p
          className={` ${eventoDate.getTime() !== currentDate.getTime() ? 'text-[#B3B3B3]' : ''}`}
        >
          {evento.title}
        </p>
        <p>
          {formatHour(evento.hora_inicio)} - {formatHour(evento.hora_fin)}
        </p>
      </div>
    </div>
  );
}
