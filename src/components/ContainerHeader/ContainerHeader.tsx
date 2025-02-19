import { LeftBarContext } from '../../contexts/LeftBarContext';
import { RightBarContext } from '../../contexts/RightBarContext';
import Heading from '../Heading/Heading';
import { useContext, useState } from 'react';

type ContainerHeaderProps = {
  message: string;
};

export default function ContainerHeader({ message }: ContainerHeaderProps) {
  const { leftBarOpen, setLeftBarOpen } = useContext(LeftBarContext);
  const { rightBarOpen, setRightBarOpen } = useContext(RightBarContext);

  const toggleSidebar = () => {
    if (message === 'Gestor') {
      setRightBarOpen(!rightBarOpen);
    } else if (message === 'Personal') {
      setLeftBarOpen(!leftBarOpen);
    }
  };

  return (
    <>
      {message === 'Gestor' ? (
        <div
          className={`flex justify-between border-b border-Jborder p-4 ${rightBarOpen === false ? 'w-fit' : 'w-full'}`}
        >
          {rightBarOpen === true && <Heading message={message} />}
          <svg
            onClick={toggleSidebar}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={'#000000'}
            fill={'none'}
          >
            <path
              d="M2 12C2 8.3109 2 6.46633 2.81382 5.1588C3.1149 4.67505 3.48891 4.2543 3.91891 3.91557C5.08116 3.00003 6.72077 3.00003 10 3.00003H14C17.2792 3.00003 18.9188 3.00003 20.0811 3.91557C20.5111 4.2543 20.8851 4.67505 21.1862 5.1588C22 6.46633 22 8.3109 22 12C22 15.6892 22 17.5337 21.1862 18.8413C20.8851 19.325 20.5111 19.7458 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7458 3.1149 19.325 2.81382 18.8413C2 17.5337 2 15.6892 2 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14.5 3.00003L14.5 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M18 7.00006H19M18 10.0001H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : message === 'Personal' ? (
        <div
          className={`flex justify-between border-b border-Jborder p-4 ${leftBarOpen === false ? 'w-fit' : 'w-full'}`}
        >
          {leftBarOpen === true && <Heading message={message} />}
          <svg
            onClick={toggleSidebar}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            color={'#000000'}
            fill={'none'}
          >
            <path
              d="M2 12C2 8.31087 2 6.4663 2.81382 5.15877C3.1149 4.67502 3.48891 4.25427 3.91891 3.91554C5.08116 3 6.72077 3 10 3H14C17.2792 3 18.9188 3 20.0811 3.91554C20.5111 4.25427 20.8851 4.67502 21.1862 5.15877C22 6.4663 22 8.31087 22 12C22 15.6891 22 17.5337 21.1862 18.8412C20.8851 19.325 20.5111 19.7457 20.0811 20.0845C18.9188 21 17.2792 21 14 21H10C6.72077 21 5.08116 21 3.91891 20.0845C3.48891 19.7457 3.1149 19.325 2.81382 18.8412C2 17.5337 2 15.6891 2 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9.5 3L9.5 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M5 7H6M5 10H6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : message === 'Chat' ? (
        <div className="w-full flex justify-between border-b border-Jborder p-4">
          <Heading message={message} />
        </div>
      ) : null}
    </>
  );
}
