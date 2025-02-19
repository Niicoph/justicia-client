import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNote } from '../../hooks/Notas/useCreateNote';
import LoadingSpinner from '../ui/loadingSpinner';
import { useState } from 'react';
import AddButton from '../AddButton/AddButton';

export default function NoteDialog() {
  const note = useNote();
  const [noteData, setNoteData] = useState({
    titulo: '',
    descripcion: '',
  });

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const notePayload = {
    //   titulo: noteData.titulo,
    //   descripcion: noteData.descripcion,
    // };
    note.mutate();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <AddButton action="Agregar nota" />
      </DialogTrigger>
      <DialogContent className="p-6">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle>Agregar Nota</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleNoteSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                name="titulo"
                value={noteData.titulo}
                onChange={handleInputChange}
                placeholder="Nota"
                className="w-full"
              />
              <Input
                type="text"
                name="descripcion"
                value={noteData.descripcion}
                onChange={handleInputChange}
                placeholder="Descripción"
                className="w-full"
              />
              {/* Error message */}
              {note.isError && (
                <p className="text-red-500 text-center">
                  Error: {note.error?.message}
                </p>
              )}
              {/* Submit button with loading */}
              <Button
                type="submit"
                className={`w-full p-2 bg-black text-white rounded-md  ${note.isLoading ? 'opacity-50' : ''}`}
                disabled={note.isLoading}
              >
                {note.isLoading ? <LoadingSpinner /> : 'Agregar Nota'}
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
