import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
