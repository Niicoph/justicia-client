import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RoutesApp from './routes/RoutesApp';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </StrictMode>
);
