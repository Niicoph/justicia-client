import Header from '../../components/HeaderD/Header';
import Card from '../../components/Card/Card';
import Heading from '../../components/Heading/Heading';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-Jbackground">
      <Header />
      <main className="w-full h-full flex flex-col px-4 pt-4 gap-4">
        <Heading message="Bienvenido otra vez, Nico 👋 " />
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <Card
            color="bg-[#DEECFF]"
            colorPrimary="text-[#354EEF]"
            colorImg="354EEF"
            title="Asistente AI"
            subtitle="Nuevo chat"
            icon="https://img.icons8.com/ios-glyphs/30/354EEF/bot.png"
          />
          <Card
            color="bg-[#D1FAE5]"
            colorPrimary="text-[#00BA81]"
            colorImg="00BA81"
            title="Calendario"
            subtitle="Ver agenda"
            icon="https://img.icons8.com/material-rounded/30/00BA81/calendar--v1.png"
          />
          <Card
            color="bg-[#EDE9FE]"
            colorPrimary="text-[#7C3AED]"
            colorImg="7C3AED"
            title="Documentos"
            subtitle="Ver archivos"
            icon="https://img.icons8.com/material-rounded/30/7C3AED/folder-invoices.png"
          />
          <Card
            color="bg-[#FDE2E1]"
            colorPrimary="text-[#DC2625]"
            colorImg="DC2625"
            title="Editor Word"
            subtitle="Crear documento"
            icon="https://img.icons8.com/material-rounded/30/DC2625/ms-word.png"
          />
          <Card
            color="bg-[#FEF3C7]"
            colorPrimary="text-[#D87708]"
            colorImg="DC2625"
            title="Notas"
            subtitle="Administrar notas"
            icon="https://img.icons8.com/material-rounded/30/D87708/filled-note.png"
          />
        </div>
      </main>
    </div>
  );
}
