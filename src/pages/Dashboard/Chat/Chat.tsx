import Heading from '../../../components/Heading/Heading';
interface ChatProps {
  className?: string;
}

export default function Chat({ className }: ChatProps) {
  return (
    <section
      className={`flex-1 flex flex-col ${className} lgCustom:flex-auto lgCustom:block lgCustom:w-2/4 rounded-md border border-Jborder bg-white`}
    >
      <div className="flex flex-col items-center h-full p-4 ">
        <div className="w-full flex justify-between h-6">
          <Heading message="Chat"></Heading>
        </div>
      </div>
      {/* Cody */}
    </section>
  );
}
