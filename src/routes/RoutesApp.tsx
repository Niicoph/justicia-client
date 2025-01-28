import { Routes, Route } from 'react-router-dom';
import App from '../App';
export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<p>not found</p>} />
    </Routes>
  );
}
