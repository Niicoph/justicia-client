import Note from '../../../components/Note/Note';
import { useGetNotes } from '../../../hooks/Notas/useGetNotes';
// contiene logica para el PUT import NoteDialog from '../../../components/Dialogs/NoteDialog';
import AddButton from '../../../components/AddButton/AddButton';
import { useCreateNote } from '../../../hooks/Notas/useCreateNote';
import { toast } from 'sonner';
import LoadingSkeleton from '../../../components/LoadingSkeleton/LoadingSkeleton';
import { useDeleteNote } from '../../../hooks/Notas/useDeleteNotes';

export default function Notas() {
  const { data: notes, isLoading, isError } = useGetNotes();
  const { mutate } = useCreateNote();
  const noteLength = notes?.length;

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    toast.success('Nota agregada');
  };

  if (isError) {
    return <div>Ocurrió un error al obtener las notas</div>;
  }

  return (
    <div
      className={`flex flex-col  h-full p-4 gap-4  lgCustom:bg-white overflow-y-scroll rounded-md `}
    >
      <form action="post" onSubmit={handleNoteSubmit}>
        <AddButton action="Agregar nota" newNoteLoading={isLoading} />
      </form>
      {isLoading && <LoadingSkeleton noteLength={noteLength} />}
      <div className="rounded-md w-full flex-grow h-10 flex flex-col gap-4 overflow-y-scroll">
        {notes?.map((note) => (
          <Note
            key={note.id}
            content={note.titulo}
            description={note.descripcion}
            id={note.id}
          />
        ))}
      </div>
    </div>
  );
}
