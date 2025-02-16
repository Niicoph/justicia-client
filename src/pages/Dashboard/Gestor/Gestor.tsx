import Documentos from './Documentos';
import Editor from './Editor';

interface GestorProps {
  className?: string;
}

export default function Gestor({ className }: GestorProps) {
  return (
    <section
      className={`flex-1 flex flex-col ${className} lgCustom:flex-auto lgCustom:block lgCustom:w-1/4`}
    >
      <Documentos />
      {/* <Editor /> */}
    </section>
  );
}
