import Header from '../../components/HeaderD/Header';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';
import BoxContainer from '../../components/BoxContainer/BoxContainer';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col overflow-y-scroll bg-Jbackground animate-fade-in">
      <Header />
      <main className="w-full h-full flex flex-col px-4 py-6 gap-4">
        <div>
          <Heading message="Hola Nico! 👋 " />
          <p className="nunito-light text-sm text-gray-500">
            ¿Qué tarea deseas realizar hoy?
          </p>
        </div>

        <section className="grid grid-cols-2 grid-rows-3 gap-4 ">
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Asistente AI"
            subtitle="Nuevo chat"
            icon="https://img.icons8.com/ios-glyphs/30/354EEF/bot.png"
            to="/dashboard/chat"
          />
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Calendario"
            subtitle="Ver agenda"
            icon="https://img.icons8.com/material-rounded/30/354EEF/calendar--v1.png"
            to="/dashboard/calendario"
          />
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Documentos"
            subtitle="Ver archivos"
            icon="https://img.icons8.com/material-rounded/30/354EEF/folder-invoices.png"
            to="/dashboard/documentos"
          />
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Editor Word"
            subtitle="Crear documento"
            icon="https://img.icons8.com/material-rounded/30/354EEF/ms-word.png"
            to="/dashboard/editor"
          />
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Notas"
            subtitle="Administrar notas"
            icon="https://img.icons8.com/material-rounded/30/354EEF/filled-note.png"
            to="/dashboard/notas"
          />
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Editor Word"
            subtitle="Crear documento"
            icon="https://img.icons8.com/material-rounded/30/354EEF/ms-word.png"
            to="/dashboard/editor"
          />
        </section>
        <div>
          <Heading message="Tus próximos evento 🗓️" />
          <p className="nunito-light text-sm text-gray-500">
            Recorda verificar tus notificaciones!
          </p>
        </div>
        <section className="flex flex-col gap-4 ">
          <BoxContainer
            color="bg-[#00BA81]"
            content="Reunion con el equipo"
            description="Reunión de trabajo para definir los próximos pasos del proyecto."
            time="10:00 AM"
          />
          <BoxContainer
            color="bg-[#7C3AED]"
            content="Llamada con el cliente"
            description="Llamada con el cliente para definir los detalles del proyecto"
            time="18:00 PM"
          />
          <BoxContainer
            color="bg-[#D87708]"
            content="Entrevista de trabajo"
            description="Entrevista de trabajo para el puesto de desarrollador de software"
            time="08:00 AM"
          />
          <BoxContainer
            color="bg-[#DC2625]"
            content="Entregar documentos escribania"
            description="Entregar los documentos necesarios para la escritura de la casa"
            time="14:00 PM"
          />
        </section>
      </main>
    </div>
  );
}
