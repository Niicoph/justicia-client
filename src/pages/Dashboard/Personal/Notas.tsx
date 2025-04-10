import Nota from '../../../components/Nota/Nota';
import AddButton from '../../../components/AddButton/AddButton';
import LoadingSkeleton from '../../../components/LoadingSkeleton/LoadingSkeleton';
import UpdateNote from '../../../components/Notas/UpdateNote/UpdateNote';
import { useCreateNote } from '../../../hooks/Notas/useCreateNote';
import { useGetNotes } from '../../../hooks/Notas/useGetNotes';
import { toast } from 'sonner';
import { useState } from 'react';
import { Note } from '../../../types/note';

export default function Notas() {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const { data: notes, isLoading, isError } = useGetNotes();
  const { mutate } = useCreateNote();

  const noteLength = notes?.length;

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    toast.success('Nota agregada');
  };

  if (isError) {
    toast.error('Error al cargar las notas');
  }
  return (
    <div
      className={`flex flex-col h-2/3 p-4 gap-4 lgCustom:bg-white overflow-y-scroll rounded-xl`}
    >
      {showEditMenu && selectedNote ? (
        <UpdateNote
          selectedNote={selectedNote}
          setShowEditMenu={setShowEditMenu}
        />
      ) : (
        <>
          <form action="post" onSubmit={handleNoteSubmit}>
            <AddButton action="Agregar nota" newNoteLoading={isLoading} />
          </form>
          {isLoading && <LoadingSkeleton noteLength={noteLength} />}
          <div className="rounded-md w-full flex-grow h-10 flex flex-col gap-4 overflow-y-scroll">
            {notes?.map((note) => (
              <Nota
                key={note.id}
                content={note.titulo}
                description={note.descripcion ?? ''}
                id={note.id}
                setShowEditMenu={setShowEditMenu}
                setSelectedNote={setSelectedNote}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
