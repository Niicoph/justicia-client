import { createContext, ReactNode, useState } from 'react';

interface LeftBarContextType {
  leftBarOpen: boolean;
  setLeftBarOpen: (value: boolean) => void;
}

export const LeftBarContext = createContext<LeftBarContextType>({
  leftBarOpen: true,
  setLeftBarOpen: () => {},
});

export const LeftBarProvider = ({ children }: { children: ReactNode }) => {
  const [leftBarOpen, setLeftBarOpen] = useState(true);

  return (
    <LeftBarContext.Provider value={{ leftBarOpen, setLeftBarOpen }}>
      {children}
    </LeftBarContext.Provider>
  );
};
