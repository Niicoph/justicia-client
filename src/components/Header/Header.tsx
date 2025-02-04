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
    <header className="top-0 left-0 flex justify-between items-center w-full h-20 bg-Background z-40">
      <div className="w-fit h-fit lg:h-full lg:w-2/5">
        <img src={Logo} alt="logo" className="h-10 w-10" />
      </div>
      <div className="w-full h-full justify-evenly items-center inter-regular text-white text-opacity-50 hidden lg:flex">
        <Link to="/login">Inicio</Link>
        <Link to="/login">Casos de uso</Link>
        <Link to="/login">Contacto</Link>
      </div>
      <div className="w-2/5 h-full justify-between items-center hidden lg:flex">
        <Link to="/login" className="inter-regular text-white text-opacity-50">
          Login
        </Link>
        <Button className="text-black">Empezar</Button>
      </div>

      {/* Mobile Nav */}
      <button
        className="relative flex justify-center items-center gap-4 lg:hidden z-40"
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
      {renderNav && <Nav renderNav={renderNav} animation={animation} />}
    </header>
  );
}
