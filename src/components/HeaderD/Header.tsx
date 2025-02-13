import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split('/')[2] || 'inicio';
  const [selected, setSelected] = useState(path);

  useEffect(() => {
    setSelected(path);
  }, [path]);

  const handleSelectChange = (value: string) => {
    setSelected(value);
    navigate(`/dashboard/${value === 'inicio' ? '' : value}`);
  };

  return (
    <header className="h-20 border border-b border-Jborder rounded-br-xl rounded-bl-xl shadow-sm flex justify-between items-center p-4 bg-white">
      <div className="w-32 h-10">
        <Select value={selected} onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full h-full border-none shadow-none">
            <SelectValue placeholder="Selecciona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inicio">Inicio</SelectItem>
            <SelectItem value="chat">Chat AI</SelectItem>
            <SelectItem value="calendario">Calendario</SelectItem>
            <SelectItem value="documentos">Documentos</SelectItem>
            <SelectItem value="word">Editor</SelectItem>
            <SelectItem value="notas">Notas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-32 h-10 flex justify-between items-center">
        <img
          src="https://img.icons8.com/forma-light/30/help.png"
          alt="help"
          className="h-5 w-5"
        />
        <img
          src="https://img.icons8.com/forma-light/30/appointment-reminders.png"
          alt="appointment-reminders"
          className="h-5 w-5"
        />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
