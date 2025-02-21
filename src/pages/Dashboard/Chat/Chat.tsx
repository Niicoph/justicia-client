import ContainerHeader from '../../../components/ContainerHeader/ContainerHeader';
interface ChatProps {
  className?: string;
}

export default function Chat({ className }: ChatProps) {
  return (
    <section
      className={`flex-1 flex flex-col ${className} lgCustom:flex-auto lgCustom:block lgCustom:w-2/4 rounded-xl bg-white`}
    >
      <ContainerHeader message="Chat" />
      {/* Cody */}
    </section>
  );
}
