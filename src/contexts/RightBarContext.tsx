import { createContext, ReactNode, useState } from 'react';

interface RightBarContextType {
  rightBarOpen: boolean;
  setRightBarOpen: (value: boolean) => void;
}

export const RightBarContext = createContext<RightBarContextType>({
  rightBarOpen: true,
  setRightBarOpen: () => {},
});

export const RightBarProvider = ({ children }: { children: ReactNode }) => {
  const [rightBarOpen, setRightBarOpen] = useState(true);

  return (
    <RightBarContext.Provider value={{ rightBarOpen, setRightBarOpen }}>
      {children}
    </RightBarContext.Provider>
  );
};
