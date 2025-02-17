import Documentos from './Documentos';
import Editor from './Editor';

interface GestorProps {
  className?: string;
}

export default function Gestor({ className }: GestorProps) {
  return (
    <section
      className={`flex-1 flex flex-col ${className} lgCustom:flex-auto lgCustom:flex lgCustom:w-1/4 rounded-md gap-4`}
    >
      <Documentos />
      <Editor />
    </section>
  );
}
