import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Calendario from '../pages/Calendario/Calendario';
export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="dashboard/calendario" element={<Calendario />} />
      <Route path="dashboard/chat" element={<h1>Chat</h1>} />
      <Route path="dashboard/documentos" element={<h1>Documentos</h1>} />
      <Route path="dashboard/editor" element={<h1>Editor</h1>} />
      <Route path="dashboard/notas" element={<h1>Notas</h1>} />∏
    </Routes>
  );
}
