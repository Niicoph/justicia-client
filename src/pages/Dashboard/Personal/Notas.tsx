import Heading from '../../../components/Heading/Heading';
import Note from '../../../components/Note/Note';

export default function Notas() {
  return (
    <div className="flex flex-col items-center h-full p-4 gap-4 lgCustom:h-full lgCustom:bg-white lgCustom:rounded-md">
      <div className="w-full flex justify-between h-6">
        <Heading message="Notas"></Heading>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Note content="Realizar pedido ML" description="" />
        <Note content="Entregar datos PL" description="no olvidar testimonio" />
      </div>
    </div>
  );
}
