import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type ProfilePopoverProps = {
  logout: () => void;
};

export default function ProfilePopover({ logout }: ProfilePopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className="w-14 h-full flex justify-center items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="mr-4 flex flex-col p-0 shadow-pop-sha">
        <div className="flex justify-start items-center gap-2 border-b border-Jborder p-4 text-sm hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={44}
            height={44}
            color={'#000000'}
            fill={'none'}
            className="h-5 w-5"
          >
            <path
              d="M5.18007 15.2964C3.92249 16.0335 0.625213 17.5386 2.63348 19.422C3.6145 20.342 4.7071 21 6.08077 21H13.9192C15.2929 21 16.3855 20.342 17.3665 19.422C19.3748 17.5386 16.0775 16.0335 14.8199 15.2964C11.8709 13.5679 8.12906 13.5679 5.18007 15.2964Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7C14 9.20914 12.2091 11 10 11C7.79086 11 6 9.20914 6 7C6 4.79086 7.79086 3 10 3C12.2091 3 14 4.79086 14 7Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M19.6221 4.56564C19.8457 4.32342 19.9574 4.20232 20.0762 4.13168C20.3628 3.96123 20.7157 3.95593 21.0071 4.1177C21.1279 4.18474 21.2431 4.30244 21.4735 4.53783C21.7039 4.77322 21.8192 4.89092 21.8848 5.01428C22.0431 5.31194 22.038 5.67244 21.8711 5.96521C21.8019 6.08655 21.6834 6.20073 21.4463 6.4291L18.6252 9.14629C18.1759 9.57906 17.9512 9.79545 17.6704 9.90512C17.3896 10.0148 17.081 10.0067 16.4636 9.99057L16.3796 9.98838C16.1917 9.98346 16.0977 9.98101 16.0431 9.91901C15.9885 9.85702 15.9959 9.7613 16.0108 9.56985L16.0189 9.4659C16.0609 8.92706 16.0819 8.65765 16.1871 8.41547C16.2923 8.17328 16.4738 7.97664 16.8368 7.58335L19.6221 4.56564Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <label>
            <p>Editar Perfil</p>
          </label>
        </div>
        <div
          className="flex justify-start items-center gap-2 border-b border-Jborder p-4 text-sm cursor-pointer hover:bg-gray-100"
          onClick={() => logout()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={44}
            height={44}
            color={'#000000'}
            fill={'none'}
            className="h-5 w-5"
          >
            <path
              d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M16 12H8M16 12C16 11.2998 14.0057 9.99153 13.5 9.5M16 12C16 12.7002 14.0057 14.0085 13.5 14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <label className="cursor-pointer">
            <p>Cerrar Sesión</p>
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
