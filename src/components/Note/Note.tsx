import DeleteButton from '../DeleteButton/DeleteButton';
import { useDeleteNote } from '../../hooks/Notas/useDeleteNotes';

interface NoteProps {
  id: number;
  content: string;
  description?: string;
}

export default function Note({ id, content, description }: NoteProps) {
  const { mutate: deleteNote } = useDeleteNote();

  // limitamos la cantidad de caracteres a mostrar en la descripción y content
  if (content && content.length > 30) {
    content = content.slice(0, 30) + '...';
  }

  if (description && description.length > 30) {
    description = description.slice(0, 30) + '...';
  }

  const handleDelete = (id: number) => {
    try {
      deleteNote(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full p-4 h-20 rounded-md flex gap-2 items-center border hover:border hover:border-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        color={'#000000'}
        fill={'none'}
        className="w-6 h-6"
      >
        <path
          d="M14 20.5V20C14 17.1716 14 15.7574 14.8787 14.8787C15.7574 14 17.1716 14 20 14H20.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 3H11C7.22876 3 5.34315 3 4.17157 4.17157C3 5.34315 3 7.22876 3 11V13C3 16.7712 3 18.6569 4.17157 19.8284C5.34315 21 7.22876 21 11 21H12.3431C13.1606 21 13.5694 21 13.9369 20.8478C14.3045 20.6955 14.5935 20.4065 15.1716 19.8284L19.8284 15.1716C20.4065 14.5935 20.6955 14.3045 20.8478 13.9369C21 13.5694 21 13.1606 21 12.3431V11C21 7.22876 21 5.34315 19.8284 4.17157C18.6569 3 16.7712 3 13 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className={`w-full h-full flex flex-col items-center ${description ? '' : 'justify-center'}`}
      >
        <p className="w-full text-sm inter-semibold "> {content} </p>
        <p className="w-full text-sm inter-regular text-[#9ca3af] overflow-hidden">
          {description}
        </p>
      </div>
      <DeleteButton id={id} handleDelete={handleDelete} />
    </div>
  );
}
