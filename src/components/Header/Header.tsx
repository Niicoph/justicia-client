import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '../../assets/Logos/w-logo.png';
import Nav from '../Nav/Nav';

export default function Header() {
  const [renderNav, setRenderNav] = useState(false);
  const [animation, setAnimation] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenNav = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (!renderNav) {
      setRenderNav(true);
      setAnimation('animate-open');
    } else {
      setAnimation('animate-close');
      setTimeout(() => {
        setRenderNav(false);
      }, 700);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <header className="fixed top-0 left-0 w-full right-0 p-4 flex justify-center items-center h-20 bg-Background z-50 margin-0 mdd:px-20 text-white inter-bold text-sm">
      <div className="w-full h-full flex justify-between items-center mdd:w-3/4">
        <div className="h-full w-fit">
          <img
            src={Logo}
            alt="logo"
            width={75}
            height={75}
            className="w-10 h-10 mdd:h-12 mdd:w-16"
          />
        </div>
        <div className="h-full w-full items-center gap-10 pl-6 hidden mdd:flex">
          <Link to="/login">Inicio</Link>
          <Link to="/login">Casos de uso</Link>
          <Link to="/login">Contacto</Link>
        </div>
        <div className="h-full w-1/4 justify-between items-center hidden mdd:flex gap-4 xl:justify-end">
          <Link to="/login">Login</Link>
          <Button className="text-black h-full">Empezar</Button>
        </div>
        {/* Mobile Nav */}
        <button
          className="relative flex justify-center items-center gap-4 mdd:hidden z-40"
          onClick={handleOpenNav}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7H5"
              strokeWidth="2"
              strokeLinecap="round"
              stroke="white"
              origin={`12.5px 7px`}
              className={`transition-transform duration-300 ${renderNav ? 'translate-y-1 rotate-45' : 'translate-y-0 rotate-0'}`}
              style={{
                transformOrigin: '11px 7px',
              }}
            ></path>
            <path
              d="M20 12H5"
              strokeWidth="2"
              strokeLinecap="round"
              stroke="white"
              className={`transition-transform duration-300 ${renderNav ? 'scale-0' : 'scale-1'}`}
            ></path>
            <path
              d="M20 17H5"
              strokeWidth="2"
              strokeLinecap="round"
              stroke="white"
              className={`transition-transform duration-300 ${renderNav ? '-translate-y-1 -rotate-45' : 'translate-y-0 rotate-0'}`}
              style={{
                transformOrigin: '11px 17px',
              }}
            ></path>
          </svg>
        </button>
      </div>
      {renderNav && <Nav renderNav={renderNav} animation={animation} />}
    </header>
  );
}
