import Logo from '../../assets/Logos/logo.png';
import LoadingSpinner from '../../components/ui/loadingSpinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useLogin } from '../../hooks/Auth/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

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

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* noise */}
      <div className="absolute top-0 left-0 w-full h-full bg-JNoise z-10"></div>
      <header className="absolute top-0 w-full flex flex-col justify-center items-center">
        <div className="w-full bg-Jbackground  flex flex-col justify-center items-center py-4">
          <img
            src={Logo}
            alt="Logo"
            height={120}
            width={120}
            className="z-50"
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="w-full"
        >
          <g fill="#2e41d4">
            <path
              d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z"
              opacity=".5"
            ></path>
            <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path>
          </g>
        </svg>
      </header>
      <form
        className={`flex flex-col gap-4 mt-20 z-50 border p-6 rounded-md ${login.isError ? 'bg-red-200 bg-opacity-10' : ''}`}
        onSubmit={handleSubmit}
      >
        <h1 className="nunito-extrabold text-3xl text-center text-Jmain  ">
          Iniciar sesión
        </h1>
        {/* Email field */}
        <div className="relative  max-w-xs w-screen">
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
