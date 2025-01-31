import HeroApp from '../../assets/Hero/hero.png';
import Wrapper from '../../components/wrapper/Wrapper';
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';
import RoundedIcon from '../../components/Icon-round/RoundedIcon';
import Feature from '../../components/Feature-card/Feature';
import FAQ from '../../components/FAQ/Faq';
import FooterHero from '../../components/FooterHero/FooterHero';
import BlurText from '../../components/InitialHeading/BlurText';

import AnimatedContent from '../../components/Container/AnimatedContent';
import { Button } from '@/components/ui/button';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const handleAnimationComplete = () => {};

  return (
    <Wrapper>
      <Header />
      <main className="flex flex-col items-center h-full w-full gap-16">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.7}
        >
          {/* Hero section */}
          <section className="relative bg-hero flex flex-col items-center h-fit border border-Bgray border-opacity-10 rounded-xl p-2 mt-20 overflow-hidden">
            <div className="flex flex-col gap-16 w-full h-fit justify-center items-center  dm-sans-bold text-white text-center pt-20 pb-20 z-20">
              <div className="flex flex-col justify-center items-center">
                <BlurText
                  text="La solución"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-hero-p1"
                  animationFrom={undefined}
                  animationTo={undefined}
                />
                <BlurText
                  text="Inteligente"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-hero-h1"
                  animationFrom={undefined}
                  animationTo={undefined}
                />
                <BlurText
                  text="para tu despacho jurídico"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-hero-p2"
                  animationFrom={undefined}
                  animationTo={undefined}
                />
              </div>
              <div className="flex gap-4">
                <Button className="text-black">Empezar</Button>
                <Button variant="outline">Aprender mas</Button>
              </div>
              <img src={HeroApp} alt="image-app" className="rounded-lg" />
            </div>
            {/* Blur start */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-blur-1 opacity-90 blur-3xl rounded-full z-10 animate-mercury"></div>
            <div className="absolute bottom-8 left-0 w-full h-72 bg-blur-2 opacity-90 blur-3xl rounded-full z-10 animate-mercury"></div>
            {/* Blur end */}
          </section>
        </AnimatedContent>
        {/* Badges section */}
        <section className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-10 w-full text-white text-left">
            <div className="flex flex-col gap-5">
              <h2 className="text-main-h2 inter-bold">¿Qué es Justic.IA?</h2>
              <p className="text-sub-p inter-light text-Bgray">
                Justic.IA es una plataforma diseñada para estudios de abogados
                que busca{' '}
                <span className="dm-sans-bold bg-JGradient bg-clip-text text-transparent ">
                  optimizar
                </span>{' '}
                su gestión diaria. Buscamos centralizar todas las necesidades de
                tu despacho en un unico lugar
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
        <section className="relative flex flex-col text-left w-full gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-main-h2 dm-sans-bold text-white">
              Mejorá tu productividad
            </h2>
            <p className="text-sub-p inter-light text-Bgray">
              Optimiza la gestión de tu estudio jurídico con una plataforma
              impulsada por IA, diseñada para{' '}
              <span className="dm-sans-bold bg-JGradient bg-clip-text text-transparent text-main-p1 ">
                mejorar
              </span>{' '}
              la eficiencia y reducir la carga operativa.
            </p>
          </div>

          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.1}
          >
            <Feature
              icon="https://img.icons8.com/ios/50/FFFFFF/artificial-intelligence.png"
              title="Inteligencia Artificial"
              description="Aprovecha el poder de la IA para analizar documentos, redactar demandas y resolver dudas legales rápidamente."
            />
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <Feature
              icon="https://img.icons8.com/ios/50/FFFFFF/calendar--v1.png"
              title="Calendario"
              description="Organiza tus eventos legales con recordatorios inteligentes para que nunca pierdas una cita importante."
            />
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <Feature
              icon="https://img.icons8.com/ios/50/FFFFFF/task-completed.png"
              title="Lista de tareas"
              description="Lleva un registro de tus pendientes y tareas personales para gestionar tu despacho de manera eficiente."
            />
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <Feature
              icon="https://img.icons8.com/ios/50/FFFFFF/pdf--v1.png"
              title="Vista previa PDF"
              description="Revisa documentos legales directamente en la plataforma con nuestra herramienta de vista previa avanzada."
            />
          </AnimatedContent>
          {/* Blur flotante en la esquina superior izquierda */}
          <div className="absolute top-52 -left-40 w-full h-96 bg-blur-1 opacity-30 blur-5xl rounded-full z-10"></div>
          {/* Blur flotante en la esquina inferior derecha */}
          <div className="absolute bottom-20 -right-40 w-full h-96 bg-blur-1 opacity-30 blur-5xl rounded-full z-10"></div>
        </section>
        {/* Features description section */}
        <section className="flex flex-col w-full gap-10 text-left">
          <div className="flex flex-col gap-5 border-b border-opacity-10 border-Bgray pb-10">
            <h2 className="text-main-h2 dm-sans-bold text-white">
              Como funciona?
            </h2>
            <div className="flex w-full h-fit gap-8">
              <RoundedIcon src="https://img.icons8.com/ios-filled/50/FFFFFF/artificial-intelligence.png" />
              <RoundedIcon src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar--v1.png" />
              <RoundedIcon src="https://img.icons8.com/ios-filled/50/FFFFFF/task-completed.png" />
              <RoundedIcon src="https://img.icons8.com/ios-filled/50/FFFFFF/pdf--v1.png" />
            </div>
            <p className="text-sub-p inter-light text-Bgray">
              Analisis inteligente. Entrena a la IA subiendo tus documentos,
              realiza tus consultas y ahorra tiempo en la redacción de
              documentos legales.
            </p>
          </div>
          <div className="flex flex-col gap-4 h-fit w-full rounded-2xl text-white z-20 opacity-100 ">
            <img
              src={HeroApp}
              alt="image-app"
              className="rounded-lg w-full h-full shadow-card-sha"
            />
          </div>
        </section>
        {/* FAQ section */}
        <section className="flex flex-col w-full gap-10 text-left">
          <div className="flex flex-col gap-5">
            <h2 className="text-main-h2 dm-sans-bold text-white">FAQ</h2>
          </div>
          <div className="flex flex-col gap-5">
            <FAQ
              question="Para que es Justic.IA y como funciona?"
              answer="Justic.IA es un sistema para estudios jurídicos que permite la automatización de tareas repetitivas y la gestión documentos"
            />
            <FAQ
              question="Vale la pena contratarlo para mi estudio?"
              answer="Si tu estudio esta buscando optimizar su gestión diaria y reducir la carga operativa, Justic.IA es la solución perfecta"
            />
            <FAQ
              question="Mis documentos estaran correctamente protegidos?"
              answer="Claro que si. Justic.IA utiliza codyAI. Este servicio utiliza AWS para proteger tus documentos y garantizar su seguridad"
            />
            <FAQ
              question="Como puedo contratar el servicio?"
              answer="Podes contratar el servicio contactando a nuestro equipo por email mediante el apartado de contacto o por telefono"
            />
          </div>
        </section>
        {/* Footer Hero */}
        <section className="flex flex-col w-full gap-10">
          <FooterHero />
        </section>
        {/* Footer */}
        <section className="flex flex-col w-full gap-10">
          <Footer />
        </section>
      </main>
    </Wrapper>
  );
}
