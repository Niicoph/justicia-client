interface CardProps {
  title: string;
  subtitle: string;
  color: string;
  colorPrimary: string;
  colorImg: string;
  icon: string;
}

export default function Card({
  title,
  subtitle,
  color,
  colorPrimary,
  colorImg,
  icon,
}: CardProps) {
  return (
    <div className="h-36 w-full border border-Jborder shadow-sm rounded-lg bg-white flex flex-col p-4 gap-2">
      <div
        className={`${color} p-2 w-fit flex justify-center items-center rounded-md`}
      >
        <img src={icon} alt={`icono - ${title}`} />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className={`text-sm ${colorPrimary}`}>
        {subtitle}
        <img
          src={`https://img.icons8.com/material-rounded/96/${colorImg}/right.png`}
          alt="enter"
          className="w-4 h-4 inline-block ml-1"
        />
      </p>
    </div>
  );
}
