import Calendario from './Calendario';
import Notas from './Notas';

interface PersonalProps {
  className?: string;
}

export default function Personal({ className }: PersonalProps) {
  return (
    <section
      className={`flex-1 flex flex-col ${className} lgCustom:flex-auto lgCustom:block lgCustom:w-1/4 rounded-md border border-Jborder `}
    >
      <Calendario />
      {/* <Notas /> */}
    </section>
  );
}
