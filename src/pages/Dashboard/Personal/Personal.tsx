import { useContext } from 'react';
import { LeftBarContext } from '../../../contexts/LeftBarContext';
import ContainerHeader from '../../../components/ContainerHeader/ContainerHeader';
import Calendario from './Calendario';
import Notas from './Notas';

interface PersonalProps {
  className?: string;
}

export default function Personal({ className }: PersonalProps) {
  const { leftBarOpen } = useContext(LeftBarContext);

  return (
    <section
      className={`flex flex-col ${className} lgCustom:flex-auto lgCustom:flex  rounded-xl bg-white ${leftBarOpen === false ? 'lgCustom:w-fit lgCustom:flex-initial' : 'lgCustom:w-2/6'}`}
    >
      <ContainerHeader message="Personal" />
      {leftBarOpen === true && (
        <>
          <Calendario />
          <Notas />
        </>
      )}
    </section>
  );
}
