import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Header() {
  return (
    <header className="h-20 border border-b border-Jborder flex justify-between items-center p-4 bg-white">
      <div className="w-32 h-10">
        <Select>
          <SelectTrigger className="w-full h-full">
            <SelectValue placeholder="Inicio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="inicio">Inicio</SelectItem>
            <SelectItem value="chat">Chat AI</SelectItem>
            <SelectItem value="calendario">Calendario</SelectItem>
            <SelectItem value="documentos">Documentos</SelectItem>
            <SelectItem value="word">Word</SelectItem>
            <SelectItem value="notas">Notas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="w-32 h-10 flex justify-between items-center">
        <img
          src="https://img.icons8.com/material-rounded/96/22262B/help.png"
          alt="help"
          className="h-8 w-8"
        />
        <img
          src="https://img.icons8.com/material-rounded/96/22262B/appointment-reminders.png"
          alt="appointment-reminders"
          className="h-8 w-8"
        />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
