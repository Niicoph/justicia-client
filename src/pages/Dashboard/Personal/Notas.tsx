import NoteDialog from '../../../components/Dialogs/NoteDialog';
import Heading from '../../../components/Heading/Heading';
import Note from '../../../components/Note/Note';

export default function Notas() {
  return (
    <div className="flex flex-col items-center h-3/4 p-4 gap-4 border border-Jborder rounded-md lgCustom:h-full lgCustom:bg-white lgCustom:rounded-md">
      <div className="w-full flex justify-between h-6">
        <Heading message="Notas"></Heading>
        {<NoteDialog />}
      </div>
      <div className="w-full flex flex-col gap-2">
        <Note content="Realizar pedido ML" description="" />
        <Note content="Entregar datos PL" description="no olvidar testimonio" />
      </div>
    </div>
  );
}
