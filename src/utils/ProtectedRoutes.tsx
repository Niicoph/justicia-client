import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import PageLoading from '../components/PageLoading/PageLoading';

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export default function ProtectedRoutes({ children }: ProtectedRoutesProps) {
  const { userAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <PageLoading />;
  }

  if (!userAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
