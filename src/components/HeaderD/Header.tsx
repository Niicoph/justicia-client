import { useState, useRef, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Logo from '../../assets/Logos/logo-black.png';

interface HeaderProps {
  tabActive: string;
  setTabActive: (tab: string) => void;
}

export default function Header({ tabActive, setTabActive }: HeaderProps) {
  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<{ [key: string]: HTMLParagraphElement | null }>({});

  const [tabIndicator, setTabIndicator] = useState({
    left: 0,
    width: 0,
  });

  const updateIndicator = () => {
    const activeTab = tabsRef.current[tabActive];
    const tabContainer = tabContainerRef.current;

    if (activeTab && tabContainer) {
      const containerRect = tabContainer.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();

      setTabIndicator({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  };

  useEffect(() => {
    updateIndicator(); // Actualizar al cambiar de tab
    window.addEventListener('resize', updateIndicator); // Escuchar cambios en el tamaño

    return () => {
      window.removeEventListener('resize', updateIndicator); // Limpiar evento
    };
  }, [tabActive]);

  return (
    <header className="h-24 flex flex-col justify-between items-center pt-2  lgCustom:h-14 lgCustom:pb-2">
      <div className="h-14 w-full flex justify-between items-center px-4">
        <div className="flex justify-center items-center w-fit h-full">
          <img src={Logo} alt="justicia-logo" width={40} height={40} />
        </div>
        <div className="w-fit h-full flex justify-between items-center gap-4">
          <img
            src="https://img.icons8.com/forma-light/30/help.png"
            alt="help"
            className="h-5 w-5"
          />
          <img
            src="https://img.icons8.com/forma-light/30/appointment-reminders.png"
            alt="appointment-reminders"
            className="h-5 w-5"
          />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <nav className="h-14 flex items-center w-full border-b border-Jborder px-4 lgCustom:hidden">
        {/* Contenedor de Tabs */}
        <div
          className="relative flex w-full h-full justify-between items-center "
          ref={tabContainerRef}
        >
          {['personal', 'chat', 'gestor'].map((tab) => (
            <div
              key={tab}
              className="w-fit h-full flex justify-center items-center cursor-pointer"
              onClick={() => setTabActive(tab)}
            >
              <p
                className="w-fit flex justify-center items-center h-full"
                ref={(el) => (tabsRef.current[tab] = el)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </p>
            </div>
          ))}
          {/* Línea Indicadora */}
          <div
            className="absolute bottom-0 border-b-2 border-black bg-black transition-all duration-300"
            style={{
              left: `${tabIndicator.left}px`,
              width: `${tabIndicator.width}px`,
            }}
          />
        </div>
      </nav>
    </header>
  );
}
