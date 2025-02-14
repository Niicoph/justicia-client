import Calendario from './Calendario';
import Notas from './Notas';
export default function Personal() {
  return (
    <section className="flex-1 flex flex-col">
      <Calendario />
      <Notas />
    </section>
  );
}
