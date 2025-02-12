import { createContext, ReactNode } from 'react';
import { useGetUser } from '../hooks/Auth/useGetUser';
import { User } from '../types/user';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading, isError } = useGetUser();

  return (
    <AuthContext.Provider value={{ user: user ?? null, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};
