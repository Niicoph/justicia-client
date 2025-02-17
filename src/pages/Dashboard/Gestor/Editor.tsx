import Tiptap from '../../../components/Tiptap/Tiptap';
import Heading from '../../../components/Heading/Heading';
export default function Editor() {
  return (
    <div className="flex flex-col items-center h-3/4 p-4 gap-4 border border-Jborder rounded-md lgCustom:h-full lgCustom:bg-white lgCustom:rounded-md">
      <div className="w-full flex justify-between h-6">
        <Heading message="Editor word"></Heading>
        <img
          src="https://img.icons8.com/material-rounded/96/plus-math--v1.png"
          alt="add"
          className="w-6 h-6"
        />
      </div>
      <div className="max-w-1 min-w-full h-full flex flex-col">
        <Tiptap />
      </div>
    </div>
  );
}
