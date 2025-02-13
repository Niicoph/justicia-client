import Header from '../../components/HeaderD/Header';
import Heading from '../../components/Heading/Heading';
import { Button } from '@/components/ui/button';
import CalendarComponent from '../../components/Calendar/CalendarComponent';

export default function Calendario() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll bg-Jbackground animate-fade-in">
      <Header />
      <main className="w-full h-full flex flex-col px-4 pt-4 gap-4">
        {/* Head part */}
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col  w-fit">
            <Heading message="Calendario" />
            <p className="nunito-light text-sm text-gray-500 ">
              Revisa tus eventos y actividades programadas.
            </p>
          </div>
          <div className="bg-Jmain h-8 w-8 flex justify-center items-center rounded-md">
            <img
              src="https://img.icons8.com/material-rounded/50/FFFFFF/plus--v1.png"
              alt="Agregar Evento"
              width={20}
              height={20}
            />
          </div>
        </div>
        <section className="">
          <CalendarComponent />
        </section>
      </main>
    </div>
  );
}
