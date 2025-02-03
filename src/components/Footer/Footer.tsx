import Logo from '../../assets/Logos/w-logo.png';
export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-5 w-full">
      <img src={Logo} alt="logo" width={50} height={50} />
      <div className="flex  w-full text-white pb-10 pt-10 border-t border-b border-Bgray border-opacity-10 justify-center items-center gap-5">
        <div className="h-fit w-2/4 text-sm flex flex-col gap-4 inter-light">
          <h3 className="text-lg nunito-extrabold">Empresa</h3>
          <p>Terminos y condiciones</p>
          <p>Politicas de privacidad</p>
          <p>Nosotros</p>
          <p>Contacto</p>
        </div>
        <div className="h-fit w-2/4 text-sm flex flex-col gap-4 inter-light">
          <h3 className="text-lg nunito-extrabold">Recursos</h3>
          <p>Preguntas frecuentes</p>
          <p>Casos de uso</p>
          <p>Inteligencia Artificial</p>
          <p>Calendario</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-sm text-white inter-light pb-4">
        <p>Justic.IA© 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
