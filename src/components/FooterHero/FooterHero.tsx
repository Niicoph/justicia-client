import { Button } from '@/components/ui/button';
export default function FooterHero() {
  return (
    <div className="h-[500px] text-white rounded-lg text-center text-balance border border-Bgray border-opacity-10">
      <div className="h-full w-full bg-heroFooter rounded-lg flex flex-col gap-14 justify-center items-center">
        <h1 className="text-main-h3 inter-bold ">
          Gestiona tu despacho de <br /> forma simple e inteligente.
        </h1>
        <p className="text-md inter-light">
          Descubri cómo simplificar la gestión de tu estudio con herramientas
          inteligentes y fáciles de usar
        </p>
        <Button className="text-black">Empezar</Button>
      </div>
    </div>
  );
}
