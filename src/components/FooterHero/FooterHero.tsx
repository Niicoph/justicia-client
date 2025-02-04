import { Button } from '@/components/ui/button';
export default function FooterHero() {
  return (
    <div className="h-[400px] w-full text-white rounded-lg border border-Bgray border-opacity-10">
      <div className="h-full w-full bg-heroFooter rounded-lg flex flex-col justify-center items-center p-4 gap-10">
        <h1 className="text-main-h2 nunito-extrabold text-center sm:text-main-h2-sm">
          Gestiona tu despacho <br /> de forma inteligente.
        </h1>
        <p className="inter-light text-center sm:text-lg sm:text-balance lg:w-3/4">
          Descubri cómo simplificar la gestión de tu estudio con herramientas
          inteligentes y fáciles de usar
        </p>
        <Button className="text-black">Empezar</Button>
      </div>
    </div>
  );
}
