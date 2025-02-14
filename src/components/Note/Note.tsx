interface NoteProps {
  content: string;
  description?: string;
}

export default function Note({ content, description }: NoteProps) {
  return (
    <div className="w-full h-12 py-2 rounded-md flex gap-2 items-center ">
      <img
        src="https://img.icons8.com/material-rounded/96/note.png"
        alt="note-icon"
        className="w-7 h-7"
      />
      <div
        className={`w-full h-full flex flex-col items-center ${description ? '' : 'justify-center'}`}
      >
        <p className="w-full text-sm inter-semibold "> {content} </p>
        <p className="w-full text-sm inter-regular text-gray-500">
          {description}
        </p>
      </div>
      <div className="w-7 h-7 flex justify-center items-center">
        <img
          src="https://img.icons8.com/material-rounded/96/9ca3af/right.png"
          alt="enter"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
}
