import Documentos from './Documentos';
import Editor from './Editor';
export default function Gestor() {
  return (
    <section className="flex-1 flex flex-col">
      <Documentos />
      <Editor />
    </section>
  );
}
