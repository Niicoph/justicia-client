type RoundedIconProps = {
  src: string;
  value: string;
  selected: string | null;
  setSelected: (value: string) => void;
};

export default function RoundedIcon({
  src,
  value,
  selected,
  setSelected,
}: RoundedIconProps) {
  return (
    <button
      className={`relative p-[2px] w-14 h-14 rounded-full  ${selected === value ? 'bg-gradient-to-r from-[#4F46E5] to-[#2316FF]' : 'bg-gray-500 opacity-20'} `}
      aria-selected={selected === value}
      onClick={() => setSelected(value)}
    >
      <div className=" flex justify-center items-center bg-hero rounded-full p-3 w-full h-full">
        <img width="50" height="50" src={src} alt="artificial-intelligence" />
      </div>
    </button>
  );
}
