import Heading from '../../../components/Heading/Heading';
export default function Editor() {
  return (
    <div className="flex flex-col items-center h-full  p-4 gap-4">
      <div className="w-full flex justify-between h-6">
        <Heading message="Notas"></Heading>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
