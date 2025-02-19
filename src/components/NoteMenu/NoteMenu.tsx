import DeleteButton from '../DeleteButton/DeleteButton';

type NoteMenuProps = {
  setShowEditMenu: (value: boolean) => void;
  handleDelete: (id: number) => void;
  id: number;
};

export default function NoteMenu({ setShowEditMenu, id }: NoteMenuProps) {
  return (
    <form
      action="post"
      className="rounded-md w-full flex-grow h-10 flex flex-col gap-4 p-4 border border-Jborder overflow-y-scroll"
    >
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Titulo"
          className="w-full h-6 border border-Jborder rounded-md p-2"
        />
        <div className="flex gap-2">
          <button onClick={() => setShowEditMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="w-6 h-6 cursor-pointer border border-black rounded-sm p-1 hover:border hover:border-[#9B9B9B] hover:text-[#9B9B9B]"
              color={'currentColor'}
              fill={'none'}
            >
              <path
                d="M4.80823 9.44118L6.77353 7.46899C8.18956 6.04799 8.74462 5.28357 9.51139 5.55381C10.4675 5.89077 10.1528 8.01692 10.1528 8.73471C11.6393 8.73471 13.1848 8.60259 14.6502 8.87787C19.4874 9.78664 21 13.7153 21 18C19.6309 17.0302 18.2632 15.997 16.6177 15.5476C14.5636 14.9865 12.2696 15.2542 10.1528 15.2542C10.1528 15.972 10.4675 18.0982 9.51139 18.4351C8.64251 18.7413 8.18956 17.9409 6.77353 16.5199L4.80823 14.5477C3.60275 13.338 3 12.7332 3 11.9945C3 11.2558 3.60275 10.6509 4.80823 9.44118Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <DeleteButton id={id} />
        </div>
      </div>
      <textarea
        name="description"
        id="description"
        placeholder="Descripcion"
        className="w-full flex flex-1  border border-Jborder rounded-md p-2 resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-full h-10 bg-black text-white rounded-md"
      >
        Guardar
      </button>
    </form>
  );
}
