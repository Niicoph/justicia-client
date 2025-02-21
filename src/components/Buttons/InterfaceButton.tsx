import { Button } from '@/components/ui/button';

type InterfaceButtonProps = {
  children: React.ReactNode;
};

export default function InterfaceButton({ children }: InterfaceButtonProps) {
  return (
    <Button className="w-fit  p-2 h-[32px] bg-transparent flex border border-slate-300 items-center justify-center gap-2 rounded-full text-sm inter-medium cursor-pointer hover:bg-gray-300">
      {children}
    </Button>
  );
}
