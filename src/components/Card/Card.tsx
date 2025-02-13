import { Link } from 'react-router-dom';
interface CardProps {
  title: string;
  subtitle: string;
  color: string;
  colorPrimary: string;
  colorImg: string;
  icon: string;
  to: string;
}

export default function Card({
  title,
  subtitle,
  color,
  colorPrimary,
  colorImg,
  icon,
  to,
}: CardProps) {
  return (
    <Link
      className="h-36 w-full border border-Jborder shadow-sm rounded-lg bg-white flex flex-col justify-between p-4"
      to={to}
    >
      <div
        className={`${color} p-2 w-fit flex justify-center items-center rounded-md`}
      >
        <img src={icon} alt={`icono - ${title}`} className="w-5 h-5" />
      </div>
      <h2 className="text-md font-semibold text-gray-600">{title}</h2>
      <p className={`text-sm ${colorPrimary}`}>
        {subtitle}
        <img
          src={`https://img.icons8.com/material-rounded/96/${colorImg}/right.png`}
          alt="enter"
          className="w-4 h-4 inline-block ml-1"
        />
      </p>
    </Link>
  );
}
