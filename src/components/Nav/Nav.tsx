import { useEffect } from 'react';

type NavProps = {
  renderNav: boolean;
  animation: string;
};

export default function Nav({ renderNav, animation }: NavProps) {
  useEffect(() => {
    document.body.style.overflow = renderNav ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [renderNav]);

  return (
    <nav
      className={`absolute top-0 left-0 w-full h-screen overflow-hidden bg-cardBG nunito-mbold text-5xl text-white p-4 pt-0 pb-0 ${animation}`}
    >
      <div className="w-full flex items-center justify-end h-20"></div>
      <ul className="flex flex-col gap-10 p-14 w-full h-fit justify-center">
        <li>Inicio</li>
        <li>Login</li>
        <li>FAQ</li>
        <li>Contacto</li>
        <li>Casos de uso</li>
      </ul>
    </nav>
  );
}
