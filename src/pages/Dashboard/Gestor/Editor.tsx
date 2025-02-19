import Tiptap from '../../../components/Tiptap/Tiptap';
import AddButton from '../../../components/AddButton/AddButton';
export default function Editor() {
  return (
    <div className="flex flex-col  h-full p-4 gap-4  lgCustom:bg-white rounded-md overflow-y-scroll">
      <AddButton action="Agregar Documento" />
      <div className="rounded-md w-full flex-grow h-10 flex flex-col gap-2 overflow-y-scroll">
        <Tiptap />
      </div>
    </div>
  );
}
