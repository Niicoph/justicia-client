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

import { useState } from 'react';

export default function Home() {
  const [selected, setSelected] = useState<string>('AI');
  const handleAnimationComplete = () => {};
  const messages: Record<string, string> = {
    AI: 'Análisis inteligente. Entrena a la IA subiendo tus documentos, realiza tus consultas y ahorra tiempo en la redacción de documentos legales.',
    Calendar:
      'Organiza tu tiempo con facilidad. Accede a un calendario inteligente para planificar reuniones y eventos importantes.',
    Task: 'Gestiona tus tareas de manera eficiente. Prioriza, asigna y realiza seguimiento de cada actividad sin esfuerzo.',
    PDF: 'Convierte, edita y firma documentos PDF fácilmente. Simplifica el manejo de archivos digitales sin complicaciones.',
  };

  return (
    <Wrapper>
      <Header />
      <main className="flex flex-col w-full h-full text-white nunito-extrabold bg-hero overflow-hidden px-4 gap-10 sm:px-8 sm:gap-20 md:px-16 md:gap-28  lg:w-3/4 lg:overflow-visible">
        <section className="relative h-screen w-full flex flex-col justify-center items-center pt-20">
          {/* <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.3}
          > */}
          <div className="flex flex-col h-full w-full justify-center items-center text-center z-20 overflow-hidden pt-20">
            <div className="flex h-full flex-col justify-center items-center w-full gap-10 z-20">
              <BlurText
                text="La solucion inteligente para tu despacho juridico"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-hero-h1 sm:text-hero-h1-sm md:text-hero-h1-md 2xl:w-3/4"
                animationFrom={undefined}
                animationTo={undefined}
              />
              <div className="flex gap-4">
                <Button className="text-black">Empezar</Button>
                <Button variant="outline">Aprender mas</Button>
              </div>
              <div className="w-full h-fit overflow-hidden">
                <img src={HeroApp} alt="image-app" className="rounded-lg " />
              </div>
            </div>

            {/* Blur start */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-blur-1 opacity-90 blur-3xl rounded-full z-10 animate-mercury"></div>
            <div className="absolute bottom-8 left-0 w-full h-72 bg-blur-2 opacity-90 blur-3xl rounded-full z-10 animate-mercury"></div>
            {/* /* Blur end */}
          </div>
          {/* </AnimatedContent> */}
        </section>
        <section className="flex flex-col items-center w-full gap-5 text-white z-20 sm:gap-7">
          <div className="flex flex-col gap-2 w-full text-left sm:justify-center sm:items-center">
            <h2 className="text-main-h2 nunito-extrabold text-white sm:text-main-h2-sm sm:w-full sm:text-center md:text-main-h2-md">
              ¿Qué es justic.ia?
            </h2>
            <p className="text-sm inter-light-secondary text-Bgray sm:text-lg  sm:text-center sm:text-balance 2xl:text-xl xl:w-2/4">
              Justic.IA es una plataforma diseñada para estudios de abogados que
              busca{' '}
              <span className="inter-bold bg-JGradient bg-clip-text text-transparent ">
                optimizar
              </span>{' '}
              su gestión diaria. Buscamos centralizar todas las necesidades de
              tu despacho en un unico lugar
            </p>
          </div>
          <div className="flex justify-start items-center gap-3 w-full sm:justify-center ">
            <Badge description="Rapido" />
            <Badge description="Simple" />
            <Badge description="Seguro" />
          </div>
        </section>
        {/* Features section */}
        <section className="relative flex flex-col items-center w-full gap-5 text-white sm:sm:gap-7">
          <div className="flex flex-col gap-2 w-full text-left sm:justify-center sm:items-center">
            <h2 className="text-main-h2 nunito-extrabold text-white sm:text-main-h2-sm sm:w-full sm:text-center md:text-main-h2-md">
              Mejorá tu productividad
            </h2>
            <p className="text-sm inter-light-secondary sm:text-lg sm:text-center sm:text-balance 2xl:text-xl xl:w-2/4">
              Optimiza la gestión de tu estudio jurídico con una plataforma
              impulsada por IA, diseñada para{' '}
              <span className="inter-bold bg-JGradient bg-clip-text text-transparent">
                mejorar
              </span>{' '}
              la eficiencia y reducir la carga operativa.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-7 md:grid-cols-2 z-20 2xl:w-3/4">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.3}
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
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.3}
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
              reverse={true}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.3}
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
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.3}
            >
              <Feature
                icon="https://img.icons8.com/ios/50/FFFFFF/pdf--v1.png"
                title="Vista previa PDF"
                description="Revisa documentos legales directamente en la plataforma con nuestra herramienta de vista previa avanzada."
              />
            </AnimatedContent>
          </div>
          {/* Blur flotante en la esquina superior izquierda */}
          <div className="absolute top-52 -left-40 w-full h-96 bg-blur-1 opacity-30 blur-5xl rounded-full z-10 sm:-left-72 md:-left-96 md:top-24"></div>
          {/* Blur flotante en la esquina inferior derecha */}
          <div className="absolute bottom-20 -right-40 w-full h-96 bg-blur-1 opacity-30 blur-5xl rounded-full z-10 sm:-right-72 md:-right-96 md:-bottom-32"></div>
        </section>
        <section className="flex flex-col items-center w-full gap-5 text-white sm:sm:gap-7">
          <div className="flex flex-col gap-5 text-left border-b border-opacity-10 border-Bgray pb-5 ">
            <h2 className="text-main-h2 nunito-extrabold text-white sm:text-main-h2-sm sm:w-full sm:text-center md:text-main-h2-md">
              Como funciona?
            </h2>
            <div className="flex w-full h-fit gap-8 sm:justify-center sm:items-center 2xl:gap-12">
              <RoundedIcon
                src="https://img.icons8.com/ios-filled/50/FFFFFF/artificial-intelligence.png"
                value="AI"
                selected={selected}
                setSelected={setSelected}
              />
              <RoundedIcon
                src="https://img.icons8.com/ios-filled/50/FFFFFF/calendar--v1.png"
                value="Calendar"
                selected={selected}
                setSelected={setSelected}
              />
              <RoundedIcon
                src="https://img.icons8.com/ios-filled/50/FFFFFF/task-completed.png"
                value="Task"
                selected={selected}
                setSelected={setSelected}
              />
              <RoundedIcon
                src="https://img.icons8.com/ios-filled/50/FFFFFF/pdf--v1.png"
                value="PDF"
                selected={selected}
                setSelected={setSelected}
              />
            </div>
            <p className="text-sm inter-light-secondary text-Bgray sm:w-full sm:text-center sm:text-lg">
              {messages[selected]}
            </p>
          </div>
          <div className="flex flex-col h-fit w-full rounded-2xl text-white z-20 opacity-100 ">
            <img
              src={HeroApp}
              alt="image-app"
              className="rounded-xl w-full h-full shadow-card-sha"
            />
          </div>
        </section>
        {/* FAQ section */}
        <section className="flex flex-col items-center w-full gap-5 text-white">
          <div className="flex flex-col gap-5 w-full text-left">
            <h2 className="text-main-h2 nunito-extrabold sm:text-main-h2-sm sm:w-full sm:text-center">
              FAQ
            </h2>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <FAQ
              question="Para que es Justic.IA y como funciona?"
              answer="Justic.IA es un sistema para estudios jurídicos que permite la automatización de tareas repetitivas y la gestión de documentos"
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
        <section className="flex flex-col items-center w-full gap-5">
          <FooterHero />
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
}
