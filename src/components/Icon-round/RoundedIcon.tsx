type RoundedIconProps = {
  src: string;
};

export default function RoundedIcon({ src }: RoundedIconProps) {
  return (
    <div className="relative p-[2px] w-14 h-14 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#2316FF]">
      <div className=" flex justify-center items-center bg-hero rounded-full p-3 w-full h-full">
        <img width="50" height="50" src={src} alt="artificial-intelligence" />
      </div>
    </div>
  );
}
