import LogoBlue from '../../assets/Logos/logo-blue.png';
import LoadingSpinner from '../../components/ui/loadingSpinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useContext, useEffect } from 'react';
import { useLogin } from '../../hooks/Auth/useLogin';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import PageLoading from '../../components/PageLoading/PageLoading';

export default function Login() {
  const { userAuth, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  useEffect(() => {
    if (userAuth) {
      navigate('/dashboard'); // Redirige a Dashboard si ya está autenticado
    }
  }, [userAuth, navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  // Si está cargando o ya hay un usuario autenticado, no renderizar el formulario
  if (isLoading || userAuth) {
    return <PageLoading />; // Puede usar un PageLoading o redirigir a otra página directamente.
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <form
        className={`flex flex-col gap-4 z-20 border px-5 py-10 rounded-md ${login.isError ? 'bg-red-200 bg-opacity-10' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center">
          <img src={LogoBlue} alt="logo" height={70} width={70} />
        </div>
        {/* Email field */}
        <div className="relative max-w-xs w-screen">
          <Input
            type="email"
            placeholder="Correo electrónico"
            onChange={handleEmailChange}
            disabled={login.isLoading}
            required
          />
          <label className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/24/757575/filled-message.png"
              alt="email-icon"
            />
          </label>
        </div>
        {/* Password field */}
        <div className="relative max-w-xs w-screen">
          <Input
            type="password"
            placeholder="Contraseña"
            onChange={handlePasswordChange}
            disabled={login.isLoading}
            required
          />
          <label className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-rounded/24/757575/password1.png"
              alt="password-icon"
            />
          </label>
        </div>
        {/* Error message */}
        {login.isError && (
          <p className="text-red-500 text-center nunito-light">
            {login.error.message}
          </p>
        )}

        {/* Submit button with loading */}
        <Button
          type="submit"
          className={`w-full p-2 bg-Jmain text-white rounded-md mt-6 inter-bold  text-md ${login.isLoading ? 'opacity-50' : ''}`}
          disabled={login.isLoading}
        >
          {login.isLoading ? <LoadingSpinner /> : 'Login'}
        </Button>
      </form>
    </main>
  );
}
