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
import { useNote } from '../../hooks/Notas/useNote';
import LoadingSpinner from '../ui/loadingSpinner'; // Asumiendo que tienes un spinner de carga
import { useState } from 'react';

export default function NoteDialog() {
  const note = useNote();
  const [noteData, setNoteData] = useState({
    titulo: '',
    descripcion: '',
  });

  const handleNoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const notePayload = {
      titulo: noteData.titulo,
      descripcion: noteData.descripcion,
    };
    note.mutate(notePayload);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoteData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar Nota</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleNoteSubmit} className="flex flex-col gap-4">
              <Input
                type="text"
                name="titulo" // Changed to match state key
                value={noteData.titulo}
                onChange={handleInputChange}
                placeholder="Nota"
                className="w-full"
                required
              />
              <Input
                type="text"
                name="descripcion" // Changed to match state key
                value={noteData.descripcion}
                onChange={handleInputChange}
                placeholder="Descripción"
                className="w-full"
                required
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
                className={`w-full p-2 bg-black text-white rounded-md mt-6 ${note.isLoading ? 'opacity-50' : ''}`}
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
