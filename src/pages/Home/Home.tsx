import Wrapper from '../../components/wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';
import HeroApp from '../../assets/Hero/hero.png';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <main className="flex flex-col items-center h-full w-full gap-16">
        {/* Hero section */}
        <section className="bg-hero-mobile flex flex-col items-center h-fit border border-Bgray border-opacity-10 rounded-xl p-2 mt-20">
          <div className="flex flex-col gap-10 w-full h-fit justify-center items-center  dm-sans-bold text-white text-center pt-10 pb-10">
            <div>
              <p className="text-main-p2">La solución</p>
              <h1 className="text-main-h1">inteligente</h1>
              <p className="text-main-p2">para tu despacho juridico</p>
            </div>
            <div className="flex gap-4">
              <Button className="text-black">Empezar</Button>
              <Button variant="outline">Aprender mas</Button>
            </div>
            <img src={HeroApp} alt="image-app" className="rounded-lg" />
          </div>
        </section>
        {/* Badges section */}
        <section className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-10 w-full text-white text-balance ">
            <div className="flex flex-col gap-5  justify-center items-center">
              <h2 className="text-main-h2 inter-bold">¿Qué es Justic.IA?</h2>
              <p className="text-main-p3 inter-light text-center">
                Justic.ia es una plataforma diseñada para estudios de abogados
                que busca{' '}
                <span className="dm-sans-bold text-Main">optimizar</span> su
                gestión diaria. Buscamos centralizar todas las necesidades de tu
                despacho en un unico lugar
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 w-full">
              <Badge description="Rapido" />
              <Badge description="Simple" />
              <Badge description="Seguro" />
            </div>
          </div>
        </section>
        {/* Features section */}
        <section className="flex flex-col items-center w-full">
          <h2 className="text-main-h2 dm-sans-bold text-white">
            Mejorá tu productividad
          </h2>
        </section>
      </main>
    </Wrapper>
  );
}
