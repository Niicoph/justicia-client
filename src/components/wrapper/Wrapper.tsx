import { ReactNode } from 'react';
type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div
      className={`flex flex-col w-[300px] h-[800px] justify-center p-4 pb-0 pt-0  xss:w-full xss:h-fit overflow-hidden bg-Background`}
    >
      {children}
    </div>
  );
}
