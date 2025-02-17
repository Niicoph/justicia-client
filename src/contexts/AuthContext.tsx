import { createContext, ReactNode, useEffect } from 'react';
import { useQuery } from 'react-query';
import { User } from '../types/user';
import api from '../api/api';
import { useLocation } from 'react-router-dom';

interface AuthContextType {
  userAuth: User | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  userAuth: undefined,
  isLoading: true,
  isError: false,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const {
    data: userAuth,
    isLoading,
    isError,
  } = useQuery<User, Error>(
    'userAuth',
    async () => {
      const response = await api.get<User>('/auth/userAuth');
      return response.data;
    },
    {
      enabled: location.pathname !== '/',
      retry: false,
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <AuthContext.Provider value={{ userAuth, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};
