import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from '../../assets/Logos/w-logo.png';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 flex justify-between items-center w-full h-24 p-4 bg-Background z-40 sm:p-8 lg:h-28 lg:gap-10">
      <div className="w-fit h-fit lg:h-full lg:w-2/5">
        <img src={Logo} alt="logo" className="h-full w-full" />
      </div>
      <div className="w-full h-full justify-evenly items-center inter-regular text-white text-opacity-50 hidden lg:flex">
        <Link to="/login">Inicio</Link>
        <Link to="/login">Casos de uso</Link>
        <Link to="/login">Contacto</Link>
      </div>
      <div className="w-2/5 h-full  justify-between items-center hidden lg:flex">
        <Link to="/login" className="inter-regular text-white text-opacity-50">
          Login
        </Link>
        <Button className="text-black">Empezar</Button>
      </div>
      {/* mobile nav */}
      <div className="flex justify-center items-center gap-4  lg:hidden">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0,0,256,256"
        >
          <g
            fill="#ffffff"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
            </g>
          </g>
        </svg>
      </div>
    </header>
  );
}
