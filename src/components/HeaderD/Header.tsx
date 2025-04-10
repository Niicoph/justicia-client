import { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/Logos/logo-black.png';
import PageLoading from '../PageLoading/PageLoading';
import ProfilePopover from './Profile/ProfilePopover';
import NotifyPopover from './Notify/NotifyPopover';
import HelpPopover from './Help/HelpPopover';
import { useLogout } from '../../hooks/Auth/useLogout';

interface HeaderProps {
  tabActive: string;
  setTabActive: (tab: string) => void;
}

export default function Header({ tabActive, setTabActive }: HeaderProps) {
  const { mutate: logout, isLoading: logoutLoading } = useLogout();
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
      window.removeEventListener('resize', updateIndicator);
    };
  }, [tabActive]);

  if (logoutLoading) return <PageLoading />;

  return (
    <header className="h-fit flex flex-col justify-between items-center pt-4 lgCustom:h-14">
      <div className="h-10 w-full flex justify-between items-center px-4">
        <div className="flex justify-center items-center w-14 h-full">
          <img src={Logo} alt="justicia-logo" width={40} height={40} />
        </div>
        <div className="h-full w-fit flex justify-center items-center  gap-4">
          <HelpPopover />
          <NotifyPopover />
          <ProfilePopover logout={logout} />
        </div>
      </div>
      <nav className="h-10 flex items-center w-full border-b border-Jborder px-4 lgCustom:hidden">
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
