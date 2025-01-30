type FeatureProps = {
  icon: string;
  title: string;
  description: string;
};

export default function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col gap-4 bg-cardT h-80 w-full rounded-2xl border border-Bgray border-opacity-20 text-white p-6 z-20 opacity-100">
      <img
        src={icon}
        alt="icon"
        width="50"
        height="50"
        className="bg-hero p-2 rounded-md border border-Bgray border-opacity-10 "
      />
      <h3 className=" text-xl inter-semibold">{title}</h3>
      <p className=" text-sm inter-regular z-40 text-white opacity-100">
        "{description}"
      </p>
    </div>
  );
}
