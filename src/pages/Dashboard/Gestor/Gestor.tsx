import Documentos from './Documentos';
import ContainerHeader from '../../../components/ContainerHeader/ContainerHeader';
import Editor from './Editor';
import { useContext } from 'react';
import { RightBarContext } from '../../../contexts/RightBarContext';
interface GestorProps {
  className?: string;
}

export default function Gestor({ className }: GestorProps) {
  const { rightBarOpen } = useContext(RightBarContext);
  return (
    <section
      className={`flex flex-col ${className} lgCustom:flex-auto lgCustom:flex  rounded-md border border-Jborder bg-white ${rightBarOpen === false ? 'lgCustom:w-fit lgCustom:flex-initial' : 'lgCustom:w-1/4'}`}
    >
      <ContainerHeader message="Gestor" />
      {rightBarOpen === true && (
        <>
          <Documentos />
          <Editor />
        </>
      )}
    </section>
  );
}
