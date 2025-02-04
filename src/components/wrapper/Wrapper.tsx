import { ReactNode } from 'react';
type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div
      className={`flex flex-col w-[300px] h-[800px] justify-center xss:w-full xss:h-full overflow-hidden bg-Background gap-10 lg:items-center`}
    >
      {children}
    </div>
  );
}
