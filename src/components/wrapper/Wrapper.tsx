import { ReactNode } from 'react';
type WrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function Wrapper({ children, className = '' }: WrapperProps) {
  return (
    <div
      className={`flex flex-col justify-center p-4 w-[300px] h-[800px] xss:w-full xss:h-full gap-10 overflow-hidden bg-Background${className} sm:p-8`}
    >
      {children}
    </div>
  );
}
