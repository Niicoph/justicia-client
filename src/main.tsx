import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LeftBarProvider } from './contexts/LeftBarContext';
import { RightBarProvider } from './contexts/RightBarContext';
import './index.css';
import RoutesApp from './routes/RoutesApp';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LeftBarProvider>
          <RightBarProvider>
            <RoutesApp />
            <Toaster />
          </RightBarProvider>
        </LeftBarProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
